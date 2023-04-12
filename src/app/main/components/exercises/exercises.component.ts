import { Component, OnInit } from '@angular/core';
import {Exercise, TrainingPlan} from "../../../models/training-plan";
import {de} from "date-fns/locale";
import * as fnsDate from 'date-fns';
import {TrainingPlanService} from "../../../services/training-plan.service";

@Component({
  selector: 'app-exercises',
  templateUrl: './exercises.component.html',
  styleUrls: ['./exercises.component.scss']
})
export class ExercisesComponent implements OnInit {

  exerciseNames: string[] = [];
  exercises: { [key: string]: Exercise[] } = {};

  constructor(private trainingPlanService: TrainingPlanService) {}

  ngOnInit() {
    this.trainingPlanService.trainingPlans$.subscribe(() => this.fetchExercisesFromTrainingPlans());

    if(this.trainingPlanService.trainingPlans.length == 0)
      this.trainingPlanService.getTrainingPlans();
    else
      this.fetchExercisesFromTrainingPlans();
  }


  exerciseHasWeight(name: string): boolean {
    return this.exercises[name].some((exercise) => exercise.hasOwnProperty('weight'));
  }

  formatDate(date) {
    try{
      return fnsDate.format(new Date(date), 'd. MMMM yyyy', {locale: de})
    }catch (e){
      return ''
    }
  }


  fetchExercisesFromTrainingPlans() {
    const allExercises: Exercise[] = [];
    const trainingPlans: TrainingPlan[] = this.trainingPlanService.trainingPlans;

    trainingPlans.forEach((trainingPlan) => {
      Object.values(trainingPlan.exercises).forEach((dayExercises) => {
        let date: any = new Date(trainingPlan.endDate) > new Date() ? new Date() : new Date(trainingPlan.endDate);
        date = fnsDate.formatISO(date, {representation: 'date'});
        dayExercises.forEach(exercise => exercise.date = date);
        allExercises.push(...dayExercises);
      });
    });

    const uniqueNames = new Set<string>();
    allExercises.forEach((exercise) => {
      uniqueNames.add(exercise.name);
    });

    const groupedExercises: { [key: string]: Exercise[] } = {};

    uniqueNames.forEach((name) => {
      const filteredExercises = allExercises
        .filter((exercise) => exercise.name === name)
        .sort((a, b) => new Date(b.date!).getTime() - new Date(a.date!).getTime());

      const uniqueExercises: Exercise[] = [];

      filteredExercises.forEach((exercise) => {
        if (!uniqueExercises.some((uniqueExercise) => this.isEqual(uniqueExercise, exercise))) {
          uniqueExercises.push(exercise);
        }
      });

      console.log(uniqueExercises)
      groupedExercises[name] = uniqueExercises;
    });

    this.exercises = groupedExercises;
    this.exerciseNames = Array.from(uniqueNames).sort();
  }

  isEqual(exercise1: Exercise, exercise2: Exercise): boolean {
    return (
      exercise1.name === exercise2.name &&
      exercise1.sets === exercise2.sets &&
      exercise1.reps === exercise2.reps &&
      exercise1.weight === exercise2.weight &&
      exercise1.date === exercise2.date
    );
  }


}
