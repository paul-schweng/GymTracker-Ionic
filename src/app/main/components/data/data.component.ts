import {Component, OnInit} from '@angular/core';
import {BodyData} from "../../../models/body-data";
import {EChartsOption, graphic} from "echarts";
import {add} from 'date-fns';
import * as date from 'date-fns';
import {ViewDidEnter} from "@ionic/angular";
import {configureEChartLine} from "../../../models/template-obj/echart-config";
import {DataService} from "../../../services/data.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, ViewDidEnter {

  days: string[] = date.eachWeekOfInterval({
    start: new Date(),
    end: add(new Date(), {days: 6*6*2 +3})})
    .map(d => date.formatISO(d, { representation: 'date' }));

  data3: any[] = [];



  data: BodyData = {
    bicep: {right: 0, left: 0},
    breast: 0,
    forearm: {right: 0, left: 0},
    height: 0,
    hip: 0,
    leg: {right: 0, left: 0},
    shoulders: 0,
    waist: 0,
    weight: 0
  }

  option2: EChartsOption = {
    dataset: {
      source: this.data3,
      dimensions: ['time', 'val']
    },
    xAxis: {
      type: 'time',
    },
    yAxis: {},
    series: [
      {
        type: 'line',
        name: 'test',
        encode: {
          x: 'time',
          y: 'val'
        }
      }
    ]
  };


  data4 =  [
    ['2018-04-10T20:40:33Z', 1, 5],
    ['2018-04-10T20:40:53Z', 2, 3],
    ['2018-04-10T20:41:03Z', 4, 2],
    ['2018-04-10T20:44:03Z', 5, 1],
    ['2018-04-10T20:45:03Z', 6, 0]
  ];

  option4!: EChartsOption;




  option: EChartsOption = {
    color: ['#80FFA5', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    title: {
      text: 'Gradient Stacked Area Chart'
    },
    darkMode: true,
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    grid: {
      left: '40px',
      right: '40px',
      bottom: '40px',
      containLabel: false
    },
    xAxis: [
      {
        type: 'time',
        // boundaryGap: false,
        data: this.days,
        axisLabel: {
          hideOverlap: true
        }
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(128, 255, 165)'
            },
            {
              offset: 1,
              color: 'rgb(1, 191, 236)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: 'Line 2',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(0, 221, 255)'
            },
            {
              offset: 1,
              color: 'rgb(77, 119, 255)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [120, 282, 111, 234, 220, 340, 310]
      },
      {
        name: 'Line 3',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(55, 162, 255)'
            },
            {
              offset: 1,
              color: 'rgb(116, 21, 219)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [320, 132, 201, 334, 190, 130, 220]
      },
      {
        name: 'Line 4',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 0, 135)'
            },
            {
              offset: 1,
              color: 'rgb(135, 0, 157)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 402, 231, 134, 190, 230, 120]
      },
      {
        name: 'Line 5',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        label: {
          show: true,
          position: 'top'
        },
        areaStyle: {
          opacity: 0.8,
          color: new graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgb(255, 191, 0)'
            },
            {
              offset: 1,
              color: 'rgb(224, 62, 76)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: [220, 302, 181, 234, 210, 290, 150]
      }
    ]
  };




  constructor(private readonly dataService: DataService) { }

  ngOnInit(): void {
  }


  ionViewDidEnter(): void {

    this.dataService.getBodyData().then(data => {
      this.option4 = configureEChartLine('TEST', data,['timestamp', 'my field']);
    })
  }


}
