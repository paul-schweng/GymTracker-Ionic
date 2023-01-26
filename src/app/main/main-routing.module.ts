import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {CalendarComponent} from "./components/calendar/calendar.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DataComponent} from "./components/data/data.component";
import {ExercisesComponent} from "./components/exercises/exercises.component";
import {MealsComponent} from "./components/meals/meals.component";

const routes: Routes = [
  {path: '', component: MainPage, children: [
      {path: '', component: DashboardComponent},
      {path: 'test', component: SidebarComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'calendar', component: CalendarComponent},
      {path: 'data', component: DataComponent},
      {path: 'exercises', component: ExercisesComponent},
      {path: 'meals', component: MealsComponent},
    ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
