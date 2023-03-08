import {Injectable} from "@angular/core";
import {CommunicationRequestService} from "./lib/communication-request.service";
import {HttpParams} from "@angular/common/http";
import * as date from "date-fns";
import {rotateArrayClockwise} from "../helper/rotateArray";
import {lastValueFrom, of} from "rxjs";
import {BodyData, TimeSeriesData} from "../models/body-data";

@Injectable({
  providedIn: 'root'
})
export class DataService extends CommunicationRequestService<any>{
  protected prepareRequestObjectParameter(reqParameter: any): HttpParams {
    return new HttpParams();
  }

  private createMockData(): TimeSeriesData {
    let days: string[] = date.eachWeekOfInterval({
      start: new Date(),
      end: date.add(new Date(), {days: 6*6*2 +3})})
      .map(d => date.formatISO(d, { representation: 'date' }));

    let dataPoints = Array.from({length: 14}, () => Math.floor(Math.random() * 30) + 50);
      //[60, 61, 57, 63, 64, 66, 62, 75, 75, 75, 77, 74, 75, 76];

    let array = [days, dataPoints];
    return rotateArrayClockwise(array);
  }



  getBodyData(): Promise<BodyData> {
    let newData: BodyData = {
      bicep: {right: [], left: []},
      breast: [],
      forearm: {right: [], left: []},
      hip: [],
      leg: {right: [], left: []},
      shoulders: [],
      waist: [],
      weight: []
    };

    newData.bicep.right = this.createMockData();
    newData.bicep.left = this.createMockData();
    newData.weight = this.createMockData();
    return lastValueFrom(of(newData));
  }

}
