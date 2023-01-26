import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  sidebarItems = [
    {
      title: 'Dashboard',
      link: '/',
      icon: 'home'
    },{
      title: 'Kalender',
      link: '/calendar',
      icon: 'calendar'
    },{
      title: 'Meals',
      link: '/meals',
      icon: {icon: 'local_dining', pack: 'material-icons'}
    },{
      title: 'Körpermaße',
      link: '/data',
      icon: {icon: 'straighten', pack: 'material-icons'}
    },{
      title: 'Übungen',
      link: '/exercises',
      icon: {icon: 'fitness_center', pack: 'material-icons'}
    },{
      title: 'Profil',
      link: '/profile',
      icon: 'person'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
