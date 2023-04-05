import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";
import {IAmService} from "../../../services/i-am.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService,
              public readonly iAmService: IAmService) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('here')
    this.authService.logout()
      .then();
  }
}
