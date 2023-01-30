import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {LoadingControllerService} from "../../services/loading-controller.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  hide: boolean = true;
  wrongCredentials: boolean = false;

  formGroup: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });

  constructor(private readonly authService: AuthenticationService,
              private readonly router: Router,
              private readonly loadingCtrl: LoadingControllerService) {
  }


  loginClicked(){
    this.wrongCredentials = false;
    this.loadingCtrl.isLoading = true

    const credentials = {
      username: this.formGroup.controls['username'].value,
      password: this.formGroup.controls['password'].value
    }

    this.authService.login(credentials)
      .then(() => {
        this.router.navigateByUrl('/')
      })
      .catch((error) => {
        if(error.status == 401)
          this.wrongCredentials = true;
      }).finally(() => this.loadingCtrl.isLoading = false)
  }


}
