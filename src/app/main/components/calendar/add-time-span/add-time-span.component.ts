import {Component, OnInit, ViewChild} from '@angular/core';
import {AddTrainingPlanComponent} from "../add-training-plan/add-training-plan.component";
import {ModalController} from "@ionic/angular";
import {Exercise, TrainingPlan} from "../../../../models/training-plan";
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

  formControl = new FormControl();

  addTrainingPlan = AddTrainingPlanComponent;

  trainingPlan: TrainingPlan = {
    duration: 1,
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
    dateClick: info => this.calendarSelected(info)
  };

  @ViewChild(FullCalendarComponent) calendar?: FullCalendarComponent;

  public ionViewWillEnter(): void {
    this.calendar?.getApi().updateSize();
  }

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
    this.formControl.valueChanges.subscribe(val => {
      this.calendarSelected()
    })
  }

  modelClose() {
    this.modalCtrl.dismiss()
  }

  calendarSelected(info?) {
    this.calendar?.getApi().getEvents().forEach(event => event.remove())




    let start = info?.dateStr ?? this.trainingPlan.startDate;
    let end = fnsDate.addDays(new Date(start), this.trainingPlan.duration*7);

    if(!fnsDate.isValid(new Date(start)))
      return;

    this.trainingPlan.startDate = start;
    this.trainingPlan.endDate = fnsDate.formatISO(end, {representation: 'date'});

    let event = {
        title: 'Neuer Trainingsplan',
        start: start,
        end: this.trainingPlan.endDate,
        allDay: true
    };

    this.calendar?.getApi().addEvent(event)
  }


  canNavigate() {
    return this.trainingPlan.duration > 0 &&
      fnsDate.isValid(new Date(this.trainingPlan.startDate)) && fnsDate.isValid(new Date(this.trainingPlan.endDate));
  }


}
