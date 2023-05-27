import {Component, Input, OnInit} from '@angular/core';
import {ActualExercise, Exercise} from "../../../../models/training-plan";
import {ModalController} from "@ionic/angular";
import {ExerciseInputModalComponent} from "../exercise-input-modal/exercise-input-modal.component";
import * as date from 'date-fns';
import { de } from 'date-fns/locale';
import {TrainingPlanService} from "../../../../services/training-plan.service";
import {ExerciseService} from "../../../../services/exercise.service";



@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss'],
})
export class ExerciseComponent implements OnInit {

  @Input() date: string = '';
  @Input() exercises: Exercise[] = [];
  actualExercises: ActualExercise[] = [];
  today = date.format(new Date(), 'yyyy-MM-dd');
  isBeforeTomorrow = true;
  completedExercises: number = 0;
  totalExercises: number = 0;

  constructor(private modalController: ModalController,
              private trainingPlanService: TrainingPlanService,
              private exerciseService: ExerciseService) {

  }

  ngOnInit(): void {
    this.totalExercises = this.exercises.length;
    this.loadActualExercises();
    this.isBeforeTomorrow = new Date(this.today) >= new Date(this.date);
  }

  loadActualExercises() {
    if(!this.date || this.exercises.length == 0)
      return;

    this.exerciseService.getActualExercises(this.date).then((actualExercises) => {
      this.actualExercises = this.exercises.map((exercise) => {
        const matchingExercise = actualExercises.find(
          (actualExercise) => actualExercise.id === exercise.id
        );
        console.log(matchingExercise)

        if (matchingExercise) {
          return {
            ...exercise,
            actualSets: matchingExercise.actualSets,
            actualReps: matchingExercise.actualReps,
            actualWeight: matchingExercise.actualWeight,
            date: matchingExercise.date,
          };
        } else {
          return {
            ...exercise,
            actualSets: undefined,
            actualReps: undefined,
            actualWeight: undefined,
            date: this.date,
          };
        }
      });
    })
      .finally(() => this.calculateDailyProgress());
  }

  dismissModal() {
    this.modalController.dismiss();
  }


  async editExercise(exercise: ActualExercise) {
    if (!this.isBeforeTomorrow)
      return

    const modal = await this.modalController.create({
      component: ExerciseInputModalComponent,
      componentProps: {
        actualExercise: exercise,
      },
    });

    modal.present();

    const { data, role } = await modal.onWillDismiss();
    if(role == 'confirm'){
      exercise.actualReps = data.actualReps
      exercise.actualSets = data.actualSets
      exercise.actualWeight = data.actualWeight
      await this.exerciseService.addActualExercise(exercise);
    }
    this.calculateDailyProgress();

  }

  exerciseReachedGoal(exercise: ActualExercise): boolean {
    return (
      (exercise.actualSets ?? 0) >= exercise.sets! &&
      (exercise.actualReps ?? 0) >= exercise.reps! &&
      (!exercise.weight || (exercise.actualWeight ?? 0) >= exercise.weight)
    );
  }


  calculateDailyProgress(): void {
    console.log(this.actualExercises)
    const totalExercises = this.exercises.length;
    let completedExercises = 0;

    this.actualExercises.forEach(exercise => {
      if (this.exerciseReachedGoal(exercise)) {
        completedExercises++;
      }
    });

    this.totalExercises = totalExercises
    this.completedExercises = completedExercises;
  }


  formatDate() {
    try{
      return date.format(new Date(this.date), 'EEEE, d. MMMM yyyy', {locale: de})
    }catch (e){
      return ''
    }
  }

}
