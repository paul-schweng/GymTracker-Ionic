import {Injectable} from "@angular/core";
import {CommunicationRequestService} from "./lib/communication-request.service";
import {HttpParams} from "@angular/common/http";
import {Exercise} from "../models/training-plan";
import {firstValueFrom, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ExerciseService extends CommunicationRequestService<any> {

  private readonly backendUrlPath: string = 'exercises';

  protected prepareRequestObjectParameter(reqParameter: any): HttpParams {
    return new HttpParams();
  }

  private mockData: Exercise[] = [
    {
      name: 'Bicep Curls',
      sets: 3,
      reps: 10,
      weight: 20,
      date: '2023-01-15',
    },
    {
      name: 'Bicep Curls',
      sets: 3,
      reps: 8,
      weight: 22.5,
      date: '2023-01-22',
    },
    {
      name: 'Bench Press',
      sets: 4,
      reps: 8,
      weight: 60,
      date: '2023-01-15',
    },
    {
      name: 'Bench Press',
      sets: 4,
      reps: 6,
      weight: 62.5,
      date: '2023-01-22',
    },
    {
      name: 'Squats',
      sets: 4,
      reps: 8,
      weight: 80,
      date: '2023-01-16',
    },
  ];


  getUniqueExerciseNames(): Promise<string[]> {
    const uniqueNames = new Set<string>();
    this.mockData.forEach((exercise) => {
      uniqueNames.add(exercise.name);
    });
    return firstValueFrom(of(Array.from(uniqueNames)));
    // return super.sendGetRequest(this.backendUrlPath);
  }

  getExercisesByName(name: string): Promise<Exercise[]> {
    return firstValueFrom(of(this.mockData.filter((exercise) => exercise.name === name)));
    // return super.sendGetRequest(this.backendUrlPath + '/' + name);
  }

}
