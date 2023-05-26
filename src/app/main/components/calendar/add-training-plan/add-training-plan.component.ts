import { Component, OnInit } from '@angular/core';
import {
  convertExercisesWeekToArray,
  Exercise,
  ExercisesWeek,
  TrainingPlan,
  validateExercises,
} from "../../../../models/training-plan";
import {LoadingControllerService} from "../../../../services/loading-controller.service";
import {TrainingPlanService} from "../../../../services/training-plan.service";
import {NotificationService} from "../../../../services/notification.service";
import {ModalController} from "@ionic/angular";
import {debounceTime, Subject, tap} from "rxjs";
import {ExerciseService} from "../../../../services/exercise.service";

@Component({
  selector: 'app-add-training-plan',
  templateUrl: './add-training-plan.component.html',
  styleUrls: ['./add-training-plan.component.scss'],
})
export class AddTrainingPlanComponent implements OnInit {

  trainingPlan!: TrainingPlan;

  exercises: Exercise[][] = [];

  weekDays = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag']

  searchResults: any[] = [];
  searchFocus: any = [[], [], [], [], [], [], []];
  private searchSubject = new Subject<{val: string, i: number, j: number}>();


  constructor(private readonly loadingControllerService: LoadingControllerService,
              private readonly trainingPlanService: TrainingPlanService,
              private readonly exerciseService: ExerciseService,
              private readonly notificationService: NotificationService,
              private modalCtrl: ModalController) { }


  ngOnInit() {
    this.exercises = convertExercisesWeekToArray(this.trainingPlan.exercises);
    this.searchSubject.pipe(
        debounceTime(300),
        tap((value) => value.val = value.val.trim()),
        tap((value) => {
          this.exerciseService.getExercisesByName(value.val).then((res) => {
            this.searchResults = res;
            this.onFocus(value.i, value.j)
          });
        })
      )
      .subscribe();
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

    if(this.trainingPlan.id == '-1')
      this.trainingPlanService.addTrainingPlan(this.trainingPlan)
        .then(() => this.modalCtrl.dismiss())
        .finally(() => this.loadingControllerService.isLoading = false)
    else
      this.trainingPlanService.updateTrainingPlan(this.trainingPlan)
        .then(() => this.modalCtrl.dismiss())
        .finally(() => this.loadingControllerService.isLoading = false)
  }

  searchExercises(input: any, i, j) {
    this.searchSubject.next({val: input, i, j});
  }


  setExercise(i: number, j: number, exercise: Exercise) {
    console.log(i, j, exercise, this.exercises)
    this.exercises[i][j] = exercise;
    this.searchResults = [];
  }


  onFocus(i: number, j: number) {
    console.log(this.searchResults)
    this.searchFocus[i][j] = this.searchResults.length > 0;
  }

  onBlur(i: number, j: number) {
    setTimeout(() => {
      this.searchFocus[i][j] = false;
      this.searchResults = [];
    }, 100);

  }

}
