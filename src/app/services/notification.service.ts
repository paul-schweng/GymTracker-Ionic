import {Inject, Injectable, Injector} from '@angular/core';
import {Router} from "@angular/router";
import {AnimationController, ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private httpErrorPath = "Netzwerkfehler";

  constructor(@Inject(Injector) private injector: Injector,
              private readonly router: Router,
              private toastController: ToastController,
              private animationController: AnimationController) { }

  error(header: string, msg: string, icon = '') {



    this.toastController.create({
      message: msg,
      header: header,
      icon: icon,
      color: 'danger',

      animated: true,
      duration: 3000,
      position: 'top',
      buttons: [
        {icon: 'close', role: 'cancel'}
      ]
    }).then(toast => toast.present());
  }

  public handleHttpError(error: any): void {
    //let notificationSettings: Partial<IndividualConfig> = {timeOut: 3000};

    if (!error) {
      console.info('[BaseCommunicationService] - An undefined error occurred while calling backend');
      this.error(this.httpErrorPath, "Ein unbekannter Fehler ist aufgetreten", 'globe');
    }
    else if (error.status === 400) {
      console.info('[BaseCommunicationService] - Bad request was sent to backend');
      this.error(this.httpErrorPath, "Die Anfrage hat nicht geklappt", 'globe');
    } else if (error.status === 401) {
      console.info('[BaseCommunicationService] - Unauthorized call to backend. Forwarding to unauthorized-page');
    } else if (error.status === 403) {
      console.info('[BaseCommunicationService] - Accessing resource forbidden');
      // this.notification.warn("httpError.header.forbidden", "httpError.msg.forbidden");
    } else if (error.status === 404) {
      console.info('[BaseCommunicationService] - Unknown backend call');
      if (error.hasOwnProperty("error") && error.error !== null){
        console.info('[BaseCommunicationService] - error msg: ', error.error);
        this.error(this.httpErrorPath, "httpError.msg.error", 'globe');
      }
    } else {
      console.info( '[BaseCommunicationService] - An error occurred while calling backend:\n', error.message);
      this.error(this.httpErrorPath, `Es ist ein Fehler aufgetreten (Code: ${error?.status})`, 'globe');
    }
  }


}
