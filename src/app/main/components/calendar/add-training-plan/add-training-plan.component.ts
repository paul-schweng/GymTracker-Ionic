import { Component, OnInit } from '@angular/core';
import {
  Exercise,
  ExercisesWeek,
  TrainingPlan,
  validateExercises,
} from "../../../../models/training-plan";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoadingControllerService} from "../../../../services/loading-controller.service";
import {TrainingPlanService} from "../../../../services/training-plan.service";
import {NotificationService} from "../../../../services/notification.service";
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-add-training-plan',
  templateUrl: './add-training-plan.component.html',
  styleUrls: ['./add-training-plan.component.scss'],
})
export class AddTrainingPlanComponent implements OnInit {

  trainingPlan!: TrainingPlan;

  exercises: Exercise[][] = [];

  weekDays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']



  constructor(private readonly loadingControllerService: LoadingControllerService,
              private readonly trainingPlanService: TrainingPlanService,
              private readonly notificationService: NotificationService,
              private modalCtrl: ModalController) { }

  ngOnInit() {

  }


  addExercise(dayIndex: number): void {
    if (!this.exercises[dayIndex]) {
      this.exercises[dayIndex] = [];
    }
    this.exercises[dayIndex].push({
      name: '',
      sets: 3,
      reps: 10,
      weight: undefined,
    });
  }



  removeExercise(dayIndex: number, exerciseIndex: number): void {
    this.exercises[dayIndex].splice(exerciseIndex, 1);
  }

  saveTrainingPlan(): void {

    const exercisesWeek: ExercisesWeek = {
      monday: this.exercises[0] ?? [],
      tuesday: this.exercises[1] ?? [],
      wednesday: this.exercises[2] ?? [],
      thursday: this.exercises[3] ?? [],
      friday: this.exercises[4] ?? [],
      saturday: this.exercises[5] ?? [],
      sunday: this.exercises[6] ?? [],
    };

    if(!validateExercises(exercisesWeek)){
      this.notificationService.error('HALT STOP!', 'Deine Angaben sind unvollständig oder falsch', 'flash-sharp')
      return;
    }

    this.loadingControllerService.isLoading = true;

    this.trainingPlan.exercises = exercisesWeek;
    console.log(this.trainingPlan); // or save to a database or send to a server

    this.trainingPlanService.addTrainingPlan(this.trainingPlan)
      .then(() => this.modalCtrl.dismiss())
      .finally(() => this.loadingControllerService.isLoading = false)
  }

}
