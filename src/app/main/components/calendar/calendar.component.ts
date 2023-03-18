import {Component, OnInit, ViewChild} from '@angular/core';
import * as fnsDate from 'date-fns';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import {FullCalendarComponent} from "@fullcalendar/angular";
import {calendar} from "ionicons/icons";
import deLocale from '@fullcalendar/core/locales/de';
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {BaseModalComponent} from "../common/base-modal/base-modal.component";
import {AddTimeSpanComponent} from "./add-time-span/add-time-span.component";
import {TrainingPlanService} from "../../../services/training-plan.service";
import {TrainingPlan} from "../../../models/training-plan";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  interval: {start: any, end: any} = {start: null, end: null};

  trainingPlans: TrainingPlan[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locale: deLocale,
    fixedWeekCount: false,
    height: '500px',
    eventClick: this.calendarEventClicked,
    selectable: true,
    select: this.calendarSelected,
    selectMirror: true
  };

  @ViewChild(FullCalendarComponent) calendar!: FullCalendarComponent;

  public ionViewWillEnter(): void {
    this.calendar.getApi().updateSize();
  }

  calendarEventClicked(info) {

  }

  calendarSelected(info){
    console.log(info)
  }

  constructor(private modalController: ModalController,
              private routerOutlet: IonRouterOutlet,
              private trainingPlanService: TrainingPlanService) { }


  ngOnInit(): void {
    this.trainingPlanService.getTrainingPlans().then(plans => {
      this.trainingPlans = this.sortTrainingPlansByDate(plans);
      this.trainingPlans.forEach((plan, i) => {

        this.calendar.getApi().addEvent({
          title: 'Trainingsplan ' + (i+1),
          start: plan.startDate,
          end: plan.endDate,
          allDay: true,
        });

      });
    })
  }

  async addTrainingPlan() {
    const modal = await this.modalController.create({
      component: BaseModalComponent,
      componentProps: {
        rootPage: AddTimeSpanComponent,
      },
      mode: 'md',
      presentingElement: this.routerOutlet.nativeEl,
    });

    await modal.present();
  }

  sortTrainingPlansByDate(trainingPlans: TrainingPlan[]): TrainingPlan[] {
    return trainingPlans.sort((a, b) => {
      const dateA = new Date(a.startDate);
      const dateB = new Date(b.startDate);

      return dateA.getTime() - dateB.getTime();
    });
  }


}
