import {Component, OnInit, ViewChild} from '@angular/core';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import {FullCalendarComponent} from "@fullcalendar/angular";
import deLocale from '@fullcalendar/core/locales/de';
import {IonRouterOutlet, ModalController} from "@ionic/angular";
import {BaseModalComponent} from "../common/base-modal/base-modal.component";
import {AddTimeSpanComponent} from "./add-time-span/add-time-span.component";
import {TrainingPlanService} from "../../../services/training-plan.service";
import {TrainingPlan} from "../../../models/training-plan";
import {ExerciseComponent} from "../common/exercise/exercise.component";
import {TrainingPlanInfoComponent} from "./training-plan-info/training-plan-info.component";

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
    dateClick: info => this.calendarDayClicked(info),
    eventClick: info => this.calendarEventClicked(info),
  };

  @ViewChild(FullCalendarComponent) calendar!: FullCalendarComponent;

  public ionViewWillEnter(): void {
    this.calendar.getApi().updateSize();
  }

  async calendarDayClicked(info) {
    console.log(info)

    const date = info.dateStr;

    const day = new Date(date).getDay();
    const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const dayName = dayNames[day];


    // Show the ExercisesModalComponent as before
    const trainingPlan = this.getTrainingPlanForDate(new Date(date));
    const exercises = trainingPlan?.exercises[dayName] ?? [];

    // Create and present the ExercisesModalComponent
    const modal = await this.modalController.create({
      component: BaseModalComponent,
      componentProps: {
        rootPage: ExerciseComponent,
        props: {
          date: date,
          exercises: exercises,
        }
      },
      initialBreakpoint: 0.5,
      breakpoints: [0.5, 0.9],
    });

    await modal.present();


  }


  getTrainingPlanForDate(date: Date): TrainingPlan | undefined {
    return this.trainingPlans.find((plan) => {
      const startDate = new Date(plan.startDate);
      const endDate = new Date(plan.endDate);

      return date >= startDate && date < endDate;
    });
  }




  calendarSelected(info){
    console.log(info)
  }

  constructor(private modalController: ModalController,
              private routerOutlet: IonRouterOutlet,
              private trainingPlanService: TrainingPlanService) { }


  ngOnInit(): void {
    this.trainingPlanService.trainingPlans$.subscribe(() => {
      this.loadTrainingPlans();
    });

    if(this.trainingPlanService.trainingPlans.length == 0)
      this.trainingPlanService.getTrainingPlans()
    else
      this.loadTrainingPlans();
  }


  async loadTrainingPlans() {
    await new Promise(resolve => setTimeout(resolve, 50));

    this.trainingPlans = this.trainingPlanService.trainingPlans;
    this.trainingPlans.forEach(plan => {

      this.calendar.getApi().addEvent({
        title: plan.name,
        start: plan.startDate,
        end: plan.endDate,
        allDay: true,
        id: plan.id,
      });

    });

  }


  async addTrainingPlan() {
    const modal = await this.modalController.create({
      component: BaseModalComponent,
      componentProps: {
        rootPage: AddTimeSpanComponent,
        props: {
          trainingPlans: this.trainingPlans,
        }
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


  async calendarEventClicked(info) {
    const clickedTrainingPlan = this.trainingPlans.find(
      (plan) => plan.id === info.event.id
    );

    if (!clickedTrainingPlan)
      return;

    const modal = await this.modalController.create({
      component: BaseModalComponent,
      componentProps: {
        rootPage: TrainingPlanInfoComponent,
        props: {
          trainingPlans: structuredClone(this.trainingPlans),
          selectedTrainingPlan: clickedTrainingPlan.id
        }
      },
      initialBreakpoint: 0.5,
      breakpoints: [0.5, 0.8],
    });

    await modal.present();
  }


}
