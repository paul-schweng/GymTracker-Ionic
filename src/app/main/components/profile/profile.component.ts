import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {IAmService} from "../../../services/i-am.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService,
              public readonly iAmService: IAmService,
              private readonly router: Router) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('here')
    this.authService.logout()
      .then(() => this.router.navigate(['/auth/login']));
  }
}
