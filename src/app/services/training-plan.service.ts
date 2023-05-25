import {Injectable} from "@angular/core";
import {CommunicationRequestService} from "./lib/communication-request.service";
import {HttpParams} from "@angular/common/http";
import {ActualExercise, Exercise, TrainingPlan} from "../models/training-plan";
import {firstValueFrom, of, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TrainingPlanService extends CommunicationRequestService<any> {

  private readonly backendUrlPath: string = 'training';

  protected prepareRequestObjectParameter(reqParameter: any): HttpParams {
    return new HttpParams();
  }

  trainingPlans: TrainingPlan[] = [];
  trainingPlans$ = new Subject<TrainingPlan[]>();

  generateMockTrainingPlan(): Promise<TrainingPlan[]> {
    return new Promise((resolve) => {
      const mockTrainingPlans: TrainingPlan[] = [
        {
          id: '1',
          name: "Testplan 1",
          exercises: {
          monday: [
            { name: "Squats", sets: 4, reps: 10, weight: 100 },
            { name: "Bench Press", sets: 3, reps: 8, weight: 80 },
          ],
          tuesday: [
            { name: "Deadlift", sets: 3, reps: 6, weight: 120 },
            { name: "Pull Ups", sets: 4, reps: 10 },
          ],
          wednesday: [],
          thursday: [
            { name: "Overhead Press", sets: 3, reps: 8, weight: 50 },
            { name: "Barbell Rows", sets: 4, reps: 10, weight: 70 },
          ],
          friday: [
            { name: "Leg Press", sets: 4, reps: 10, weight: 200 },
            { name: "Bicep Curls", sets: 3, reps: 12, weight: 30 },
          ],
          saturday: [],
          sunday: [
            { name: "Tricep Dips", sets: 3, reps: 12 },
            { name: "Lunges", sets: 4, reps: 10, weight: 40 },
          ],
        },
          duration: 12,
          startDate: "2023-03-20",
          endDate: "2023-06-12",
        },
        {
          id: '2',
          name: "Testplan 2",
          exercises: {
            monday: [
              { name: "Tricep Dips", sets: 3, reps: 12 },
              { name: "Lunges", sets: 4, reps: 10, weight: 40 },
            ],
            tuesday: [
              { name: "Tricep Dips", sets: 3, reps: 12 },
              { name: "Lunges", sets: 4, reps: 10, weight: 40 },
            ],
            wednesday: [
              { name: "Tricep Dips", sets: 3, reps: 12 },
              { name: "Lunges", sets: 4, reps: 10, weight: 40 },
            ],
            thursday: [
              { name: "Tricep Dips", sets: 3, reps: 12 },
              { name: "Lunges", sets: 4, reps: 10, weight: 40 },
            ],
            friday: [
              { name: "Tricep Dips", sets: 3, reps: 12 },
              { name: "Lunges", sets: 4, reps: 10, weight: 40 },
            ],
            saturday: [
              { name: "Tricep Dips", sets: 3, reps: 12 },
              { name: "Lunges", sets: 4, reps: 10, weight: 40 },
            ],
            sunday: [],
          },
          duration: 8,
          startDate: "2023-01-30",
          endDate: "2023-03-13",
        }
      ];

      resolve(mockTrainingPlans);
    });
  }


  generateActualExercises(date: string): Promise<ActualExercise[]> {
    return new Promise((resolve) => {
      // Replace the following with the actual API call or data loading logic
      setTimeout(() => {
        const mockData: ActualExercise[] = [
          {
            name: 'Bench Press',
            sets: 4,
            reps: 8,
            weight: 80,
            date: date,
          },
          {
            name: 'Squats',
            sets: 5,
            reps: 5,
            weight: 100,
            date: date,
          },
          {
            name: 'Deadlift',
            sets: 5,
            reps: 5,
            weight: 120,
            date: date,
          },
        ];

        resolve(mockData);
      }, 1000);
    });
  }


  public addTrainingPlan(trainingPlan: TrainingPlan) {

    // Remove original values from exercises and change id if its not the original

    Object.keys(trainingPlan.exercises).forEach(key => {
      trainingPlan.exercises[key].forEach(e => {
        if(!e.original)
          return;

        if(e.name == e.original.name && e.reps == e.original.reps && e.sets == e.original.sets && e.weight == e.original.weight){
          delete e['name'];
          delete e['sets'];
          delete e['reps'];
          delete e['weight'];
        }
        else {
          e.id = null;
        }
        delete e['original'];

      })
    })

    return super.sendPostRequest(this.backendUrlPath, trainingPlan).then(async res => {
      await this.getTrainingPlans();
      return res;
    })
  }

  public updateTrainingPlan(trainingPlan: TrainingPlan) {
    return super.sendPutRequest(this.backendUrlPath, trainingPlan).then(async res => {
      await this.getTrainingPlans();
      return res;
    })
  }

  public getTrainingPlans() {
    return super.sendGetRequest<TrainingPlan[]>(this.backendUrlPath)
      .then(plans => {
        this.trainingPlans = plans;
        this.trainingPlans$.next(plans);
        return plans;
      }).catch(() => {
        this.trainingPlans = [];
        this.trainingPlans$.next([]);
        return [];
      })
    /*
    return this.generateMockTrainingPlan().then(plans => {
      this.trainingPlans = plans;
      this.trainingPlans$.next(plans);
      return plans;
    })
    */
  }

  public getActualExercises(date: string): Promise<ActualExercise[]> {
    if(!date)
      return firstValueFrom<ActualExercise[]>(of([]));

    // return super.sendGetRequest<ActualExercise[]>(this.backendUrlPath + `/${date}/actual-exercises`).catch(() => {return []})
    return this.generateActualExercises(date)
  }

  public addActualExercise(exercise: ActualExercise) {
    return super.sendPostRequest(this.backendUrlPath + `/${exercise.date}/actual-exercises`, exercise)
  }


}
