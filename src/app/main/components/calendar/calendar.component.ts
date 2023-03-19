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
import {ExercisesComponent} from "../exercises/exercises.component";
import {ExerciseComponent} from "../common/exercise/exercise.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {


  trainingPlans: TrainingPlan[] = [];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locale: deLocale,
    fixedWeekCount: false,
    height: '500px',
    dateClick: info => this.calendarEventClicked(info),
    selectable: true,
    select: this.calendarSelected,
    selectMirror: true
  };

  @ViewChild(FullCalendarComponent) calendar!: FullCalendarComponent;

  public ionViewWillEnter(): void {
    this.calendar.getApi().updateSize();
  }

  async calendarEventClicked(info) {
    // Get the clicked date
    const date = info.dateStr;

    // Find the TrainingPlan for the clicked date
    const trainingPlan = this.trainingPlans.find((plan) => {
      const startDate = new Date(plan.startDate);
      const endDate = new Date(plan.endDate);
      const currentDate = new Date(date);

      return startDate <= currentDate && endDate >= currentDate;
    });

    // If a TrainingPlan is found, get the exercises for the clicked day
    const day = new Date(date).getDay();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
    const exercises = trainingPlan ? trainingPlan.exercises[dayNames[day]] : [];

    // Create and present the ExercisesModalComponent
    const modal = await this.modalController.create({
      component: ExerciseComponent,
      componentProps: {
        date: date,
        exercises: exercises,
      },
    });

    await modal.present();
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
