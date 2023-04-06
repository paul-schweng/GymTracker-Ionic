import {Component, OnInit, ViewChild} from '@angular/core';
import {AddTrainingPlanComponent} from "../add-training-plan/add-training-plan.component";
import {ModalController} from "@ionic/angular";
import {TrainingPlan} from "../../../../models/training-plan";
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import deLocale from "@fullcalendar/core/locales/de";
import {FullCalendarComponent} from "@fullcalendar/angular";
import * as fnsDate from 'date-fns';
import {FormControl} from "@angular/forms";


@Component({
  selector: 'app-add-time-span',
  templateUrl: './add-time-span.component.html',
  styleUrls: ['./add-time-span.component.scss'],
})
export class AddTimeSpanComponent implements OnInit {

  formControlName = new FormControl();
  formControlDuration = new FormControl();
  trainingPlans: TrainingPlan[] = [];

  addTrainingPlan = AddTrainingPlanComponent;

  trainingPlan: TrainingPlan = {
    duration: 1,
    name: 'Neuer Trainingsplan',
    startDate: '',
    endDate: '',
    exercises: {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
      sunday: []
    }
  };

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locale: deLocale,
    fixedWeekCount: false,
    height: '500px',
    selectable: false,
    dateClick: info => this.calendarSelected(info),
  };

  @ViewChild(FullCalendarComponent) calendar?: FullCalendarComponent;

  public ionViewWillEnter(): void {
    this.calendar?.getApi().updateSize();


  }

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.formControlName.valueChanges.subscribe(val => {
      this.calendarSelected()
    })
    this.formControlDuration.valueChanges.subscribe(val => {
      this.calendarSelected()
    })
    setTimeout(() => {
      this.trainingPlans.forEach(plan => {
        this.calendar?.getApi().addEvent({
          title: plan.name,
          start: plan.startDate,
          end: plan.endDate,
          allDay: true,
        });
      })
    }, 100)
  }

  modelClose() {
    this.modalCtrl.dismiss()
  }

  calendarSelected(info?) {
    this.calendar?.getApi().getEventById('-1')?.remove();

    let start = info?.dateStr ?? this.trainingPlan.startDate;
    let end = fnsDate.addDays(new Date(start), this.trainingPlan.duration*7);

    if(!fnsDate.isValid(new Date(start)))
      return;

    this.trainingPlan.startDate = start;
    this.trainingPlan.endDate = fnsDate.formatISO(end, {representation: 'date'});

    let newEvent: any = {
      title: this.trainingPlan.name,
      start: start,
      end: this.trainingPlan.endDate,
      allDay: true,
      id: '-1',
      backgroundColor: '#dd6922',
      borderColor: '#b04d0f'
    };

    if (this.eventOverlaps(newEvent)) {
      // Change the appearance of the overlapping event
      newEvent.backgroundColor = 'red';
      newEvent.borderColor = 'darkred';
    }

    this.calendar?.getApi().addEvent(newEvent)
  }


  canNavigate() {
    return this.trainingPlan.duration > 0 &&
      fnsDate.isValid(new Date(this.trainingPlan.startDate)) && fnsDate.isValid(new Date(this.trainingPlan.endDate)) &&
      !this.eventOverlaps();
  }


  eventOverlaps(newEvent?): boolean {
    const events = this.calendar?.getApi().getEvents();

    const flag = !!newEvent

    if(!newEvent)
      newEvent = events?.find(event => event.id === '-1');

    return events?.some(event => {
      if (event.id === '-1') {
        return false;
      }
      const eventRange = {
        start: event.startStr,
        end: event.endStr
      };
      const newEventRange = {
        start: newEvent?.startStr ?? newEvent.start,
        end: newEvent?.endStr ?? newEvent.end
      };

      if (flag)
      console.log(newEventRange, eventRange)
      return new Date(eventRange.start!) < new Date(newEventRange.end) &&
        new Date(eventRange.end!) > new Date(newEventRange.start);

    }) ?? false;
  }



}
