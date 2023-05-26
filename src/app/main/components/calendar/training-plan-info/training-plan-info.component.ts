import {Component, OnInit} from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrainingPlan } from 'src/app/models/training-plan';
import {BaseModalComponent} from "../../common/base-modal/base-modal.component";
import {AddTimeSpanComponent} from "../add-time-span/add-time-span.component";
import {de} from "date-fns/locale";
import * as fnsDate from 'date-fns';

@Component({
  selector: 'app-training-plan-info',
  templateUrl: './training-plan-info.component.html',
  styleUrls: ['./training-plan-info.component.scss'],
})
export class TrainingPlanInfoComponent implements OnInit {

  trainingPlan!: TrainingPlan;
  trainingPlans: TrainingPlan[] = [];
  selectedTrainingPlan: string = '';

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    console.log(this.trainingPlans, this.selectedTrainingPlan)
    this.trainingPlan = this.trainingPlans.find(plan => plan.id == this.selectedTrainingPlan)!;
  }


  async editTrainingPlan() {
    const modal = await this.modalController.create({
      component: BaseModalComponent,
      componentProps: {
        rootPage: AddTimeSpanComponent,
        props: {
          trainingPlan: structuredClone(this.trainingPlan),
          trainingPlans: structuredClone(this.trainingPlans),
        }
      },
      mode: 'md',
    });

    await modal.present();
  }


  formatDate(date) {
    try{
      return fnsDate.format(new Date(date), 'EEEE, d. MMMM yyyy', {locale: de})
    }catch (e){
      return ''
    }
  }


}
