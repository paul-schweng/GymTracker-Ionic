import { Injectable } from '@angular/core';
import {HttpHeaders} from "@angular/common/http";
import {RegisterUser} from "../models/registerUser";
import {IAmService} from "./i-am.service";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService{
  private readonly backendUrlPath: string = 'auth';


  constructor(private readonly iAmService: IAmService) {
  }


  login(credentials?: any) {
    const headers = new HttpHeaders(credentials ?
      {authorization: 'Basic ' + btoa(credentials.username + ':' + credentials.password)} :
      {authorization: ''});

    return this.iAmService.loadUser(headers);
  }


  logout(){
    return this.iAmService.sendPostRequest(this.backendUrlPath + '/logout', {});
  }

  register(user: RegisterUser){
    return this.iAmService.sendPostRequest(this.backendUrlPath + '/register', user);
  }

  isUsernameAvailable(username: string){
    return this.iAmService.sendGetRequest(this.backendUrlPath + `/available`, {username: username})
  }

  isAuthenticated(): boolean {
    // TODO: change this to '!!'
    return !this.iAmService.iAmUser.username;
  }

}



