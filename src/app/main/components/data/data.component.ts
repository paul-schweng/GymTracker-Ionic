import {Component, OnInit, ViewChild} from '@angular/core';
import {BodyData, BodyDataEChartOption, bodyDataToEChartOptions, TimeSeriesData} from "../../../models/body-data";
import {EChartsOption} from "echarts";
import {add} from 'date-fns';
import * as date from 'date-fns';
import {IonModal, ViewDidEnter} from "@ionic/angular";
import {configureEChartLine} from "../../../models/template-obj/echart-config";
import { OverlayEventDetail } from '@ionic/core/components';
import {DataService} from "../../../services/data.service";

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
  };

  chartOptions: BodyDataEChartOption = {};


  test: TimeSeriesData = [
    ['time',0],
    ['',null],
    ['',78.3],
    ['',null],
  ];

  option4!: EChartsOption;



  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
  }


  async ionViewDidEnter() {

    let data = await this.dataService.getBodyData();



    this.chartOptions = bodyDataToEChartOptions(data);
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
