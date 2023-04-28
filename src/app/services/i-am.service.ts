import { Injectable } from '@angular/core';
import {iAmUser} from "../models/iAmUser";
import {CommunicationRequestService} from "./lib/communication-request.service";
import {HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IAmService extends CommunicationRequestService<any>{

  iAmUser: iAmUser = {
    name: "", username: ""
  };

  protected readonly backendUrlExt: string = 'auth';


  protected prepareRequestObjectParameter(reqParameter: any): HttpParams {
    if(reqParameter.username)
      return new HttpParams().set('username', reqParameter.username);

    return new HttpParams();
  }

  loadUser(headers?: any){
    return super.sendGetRequest<iAmUser>(this.backendUrlExt + '/iAm', null, headers)
      .then(user => {
        this.iAmUser = user
        return user;
      });
  }



}
