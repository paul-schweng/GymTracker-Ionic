import {Component, OnInit, ViewChild} from '@angular/core';
import {
  BodyDataEChartOption,
  bodyDataToEChartOptions,
  rawBodyDataToBodyData,

} from "../../../models/body-data";
import {IonModal, ViewDidEnter} from "@ionic/angular";
import {DataService} from "../../../services/data.service";
import {NotificationService} from "../../../services/notification.service";
import {LoadingControllerService} from "../../../services/loading-controller.service";

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit, ViewDidEnter {

  @ViewChild(IonModal) modal!: IonModal;

  rawNewData = {
    bicep: {right: [], left: []},
    breast: [],
    forearm: {right: [], left: []},
    hip: [],
    leg: {right: [], left: []},
    shoulders: [],
    waist: [],
    weight: []
  };

  chartOptions: BodyDataEChartOption = {
    breast: undefined,
    hip: undefined,
    shoulders: undefined,
    waist: undefined,
    weight: undefined,
    bicep: {right: undefined, left: undefined},
    forearm: {right: undefined, left: undefined},
    leg: {right: undefined, left: undefined}
  };

  loadedData = false;

  constructor(private readonly dataService: DataService,
              private readonly notificationService: NotificationService,
              private readonly loadingControllerService: LoadingControllerService) {
    this.loadingControllerService.isLoading = true;
  }

  ngOnInit(): void {
  }


  ionViewDidEnter() {

    this.dataService.getBodyData().then(async data => {
      this.loadedData = true;
      await new Promise(resolve => setTimeout(resolve, 100));
      this.chartOptions = bodyDataToEChartOptions(data);
    }).finally(() => {
      this.loadingControllerService.isLoading = false;
    });
  }


  modelCancel() {
    this.modal.dismiss();
  }

  modelConfirm() {
    try{
      console.log(this.rawNewData)
      let data = rawBodyDataToBodyData(this.rawNewData);
      console.log(data)
      this.dataService.postNewData(data).then(() => {
        this.modal.dismiss(null, 'confirm');
        this.ionViewDidEnter();
      })
    }catch (e){
      this.notificationService.error('HALT STOP!', 'Deine Angaben sind unvollständig oder falsch', 'flash-sharp')
    }
  }




}
