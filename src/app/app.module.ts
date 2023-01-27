import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import {
  Animation,
  AnimationController,
  createAnimation,
  IonicModule,
  IonicRouteStrategy,
  ToastController
} from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {XhrInterceptor} from "./providers/xhr-interceptor";
import {initApp} from "./providers/initApp";
import {AuthenticationService} from "./services/authentication.service";
import {AuthGuard} from "./guards/auth.guard";
import {MainGuard} from "./guards/main.guard";
import {CommonModule} from "@angular/common";
import {NotFoundComponent} from "./component/not-found/not-found.component";
import {SplashScreenWeb} from "@capacitor/splash-screen/dist/esm/web";
import {toastEnter, toastLeave} from "./functions/toast-animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({
      toastEnter: toastEnter,
      toastLeave: toastLeave,
    }),
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: IonicRouteStrategy
    },{
      provide: HTTP_INTERCEPTORS,
      useClass: XhrInterceptor,
      multi: true
    },{
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [AuthenticationService]
    },
    AuthGuard,
    MainGuard,
    SplashScreenWeb,
    ToastController,
    AnimationController
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}


