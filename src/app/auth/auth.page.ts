import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/default";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  title = environment.title;

  constructor() { }

  ngOnInit() {
  }

}
