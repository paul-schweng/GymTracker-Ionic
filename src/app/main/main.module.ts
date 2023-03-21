import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MainRoutingModule } from './main-routing.module';

import { MainPage } from './main.page';
import {CalendarComponent} from "./components/calendar/calendar.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DataComponent} from "./components/data/data.component";
import {ExercisesComponent} from "./components/exercises/exercises.component";
import {MealsComponent} from "./components/meals/meals.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {NgxEchartsModule} from "ngx-echarts";
import {InputFieldComponent} from "./components/common/input-field/input-field.component";
import {FullCalendarModule} from "@fullcalendar/angular";
import {BaseModalComponent} from "./components/common/base-modal/base-modal.component";
import {AddTimeSpanComponent} from "./components/calendar/add-time-span/add-time-span.component";
import {AddTrainingPlanComponent} from "./components/calendar/add-training-plan/add-training-plan.component";
import {ExerciseComponent} from "./components/common/exercise/exercise.component";
import {ClickStopPropagationDirective} from "./directives/click-stop-propagation.directive";
import {ExerciseInputModalComponent} from "./components/common/exercise-input-modal/exercise-input-modal.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MainRoutingModule,
        NgxEchartsModule,
        ReactiveFormsModule,
        FullCalendarModule
    ],
  declarations: [
    MainPage,
    CalendarComponent,
    DashboardComponent,
    DataComponent,
    ExercisesComponent,
    MealsComponent,
    ProfileComponent,
    SidebarComponent,
    InputFieldComponent,
    BaseModalComponent,
    AddTimeSpanComponent,
    AddTrainingPlanComponent,
    ExerciseComponent,
    ClickStopPropagationDirective,
    ExerciseInputModalComponent,
  ]
})
export class MainModule {}
