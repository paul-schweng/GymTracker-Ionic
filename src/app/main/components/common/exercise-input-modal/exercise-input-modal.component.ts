// exercise-input-modal.component.ts
import {Component, Input, OnInit} from '@angular/core';
import {ActualExercise, Exercise} from 'src/app/models/training-plan';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-exercise-input-modal',
  templateUrl: './exercise-input-modal.component.html',
  styleUrls: ['./exercise-input-modal.component.scss'],
})
export class ExerciseInputModalComponent implements OnInit{
  @Input() actualExercise!: ActualExercise;

  exercise;

  constructor(private modalController: ModalController) {}

  dismissModal() {
    this.modalController.dismiss()
  }

  submitExerciseData() {
    // Save the user input and perform any necessary actions
    // Close the modal

    this.modalController.dismiss(this.exercise, 'confirm');
  }

  ngOnInit(): void {
    this.exercise = structuredClone(this.actualExercise);
  }
}
