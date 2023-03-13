import { Component, OnInit } from '@angular/core';
import * as fnsDate from 'date-fns';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  isDateEnabledStartDate = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    return date >= new Date('2023-03-13')

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
  };


  isDateEnabledEndDate = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();
    const currentDate = fnsDate.getISODay(new Date());

    return date > new Date(this.interval.start ?? new Date());
  };

  interval: {start: any, end: any} = {start: null, end: null};
  selectStartDate(date: any) {
    date = date.detail.value;
    this.interval.start = date;
  }

  selectEndDate(date: any) {
    date = date.detail.value;
    this.interval.end = date;
  }


}
