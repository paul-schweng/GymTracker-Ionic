import {Component, Input, OnInit} from '@angular/core';
import {Exercise} from "../../../../models/training-plan";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent {

  @Input() date: string = '';
  @Input() exercises: Exercise[] = [];

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss();
  }
}
