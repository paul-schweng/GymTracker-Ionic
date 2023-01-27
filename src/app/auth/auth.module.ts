import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AuthRoutingModule } from './auth-routing.module';

import { AuthPage } from './auth.page';
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login/login.component";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AuthRoutingModule,
        ReactiveFormsModule,
    ],
  declarations: [
    AuthPage,
    RegisterComponent,
    LoginComponent,
  ]
})
export class AuthModule {}
