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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainRoutingModule,
    NgxEchartsModule,
    ReactiveFormsModule
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
    InputFieldComponent
  ]
})
export class MainModule {}
