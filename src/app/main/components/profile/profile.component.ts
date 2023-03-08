import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/authentication.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private readonly authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  logout() {
    console.log('here')
    this.authService.logout()
      .then();
  }
}
