import { Component, OnInit } from '@angular/core';
import {environment} from "../../environments/default";

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  title = environment.title;

  public appPages = [
    { title: 'Inbox', url: '/folder/Inbox', icon: 'mail' },
    { title: 'Outbox', url: '/folder/Outbox', icon: 'paper-plane' },
    { title: 'Favorites', url: '/folder/Favorites', icon: 'heart' },
    { title: 'Archived', url: '/folder/Archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/Trash', icon: 'trash' },
    { title: 'Spam', url: '/folder/Spam', icon: 'warning' },
  ];

  sidebarItems = [
    {title: 'Dashboard', url: '/dashboard', icon: 'home'},
    {title: 'Kalender', url: '/calendar', icon: 'calendar-outline'},
    {title: 'Meals', url: '/meals', icon: 'restaurant-sharp'},
    {title: 'Körpermaße', url: '/data', icon: 'analytics-outline'},
    {title: 'Übungen', url: '/exercises', icon: 'barbell-outline'},
    {title: 'Profil', url: '/profile', icon: 'person-sharp'}
  ]

  constructor() { }

  ngOnInit() {
  }

}
