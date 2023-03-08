import {Component, OnInit, ViewChild} from '@angular/core';
import {BodyData, TimeSeriesData} from "../../../models/body-data";
import {EChartsOption} from "echarts";
import {add} from 'date-fns';
import * as date from 'date-fns';
import {IonModal, ViewDidEnter} from "@ionic/angular";
import {configureEChartLine} from "../../../models/template-obj/echart-config";
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, ViewDidEnter {

  @ViewChild(IonModal) modal!: IonModal;

  days: string[] = date.eachWeekOfInterval({
    start: new Date(),
    end: add(new Date(), {days: 6*6*2 +3})})
    .map(d => date.formatISO(d, { representation: 'date' }));

  data3: any[] = [];

  ngTest = '1';

  newData: BodyData = {
    bicep: {right: [], left: []},
    breast: [],
    forearm: {right: [], left: []},
    hip: [],
    leg: {right: [], left: []},
    shoulders: [],
    waist: [],
    weight: []
  }


  test: TimeSeriesData = [
    ['time',0],
    ['',null],
    ['',78.3],
    ['',null],
  ];

  option4!: EChartsOption;



  constructor() { }

  ngOnInit(): void {
  }


  ionViewDidEnter(): void {

    let array = [
      this.days,
      [60, 61, 57, 63, 64, 66, 62, 75, 75, 75, 77, 74, 75, 76]
    ]
    console.log(array)
    this.data3 = array[0].map((_, colIndex) => array.map(row => row[colIndex]));
    console.log(this.data3)

    this.option4 = configureEChartLine('TEST', this.data3,['timestamp', 'my field']);
  }


  modelCancel() {
    this.modal.dismiss(null, 'cancel');
  }

  modelConfirm() {
    this.modal.dismiss(null, 'confirm');
  }

  modelOnWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      let message = `Hello, ${ev.detail.data}!`;
    }
  }


}
