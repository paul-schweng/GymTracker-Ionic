import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-modal',
  templateUrl: './base-modal.component.html',
  styleUrls: ['./base-modal.component.scss'],
})
export class BaseModalComponent implements OnInit {
  rootPage: any;
  props: any;

  constructor() { }

  ngOnInit() {}

}
