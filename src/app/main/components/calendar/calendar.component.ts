import {Component, OnInit, ViewChild} from '@angular/core';
import * as fnsDate from 'date-fns';
import {CalendarOptions} from "@fullcalendar/core";
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for selectable
import {FullCalendarComponent} from "@fullcalendar/angular";
import {calendar} from "ionicons/icons";
import deLocale from '@fullcalendar/core/locales/de';
import {ModalController} from "@ionic/angular";
import {BaseModalComponent} from "../common/base-modal/base-modal.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  interval: {start: any, end: any} = {start: null, end: null};

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    locale: deLocale,
    fixedWeekCount: false,
    height: '500px',
    eventClick: this.calendarEventClicked,
    selectable: true,
    select: this.calendarSelected,
    selectMirror: true
  };

  @ViewChild(FullCalendarComponent) calendar!: FullCalendarComponent;

  public ionViewWillEnter(): void {
    this.calendar.getApi().updateSize();
  }

  calendarEventClicked(info) {

  }

  calendarSelected(info){
    console.log(info)
  }

  constructor(private modalController: ModalController,) { }

  async presentModal() {
    const modal = await this.modalController.create({
      component: BaseModalComponent,
      componentProps: {
        rootPage: null,
      },
    });

    await modal.present();
  }

  ngOnInit(): void {
  }



}
