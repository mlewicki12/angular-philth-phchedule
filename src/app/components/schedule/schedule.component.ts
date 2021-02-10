import { Component, OnInit } from '@angular/core';
import bandsList from '../../../assets/json/times.json';
import moment from 'moment/moment';
import 'moment-timezone';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  bands: {time: string, name: string}[] = bandsList;
  timezone: string;

  constructor() {
    let timezone = moment.tz.guess();
    let time : moment.Moment;

    this.bands.map(val => {
      var philly = moment.tz(val.time, "America/New_York");
      time = philly.tz(timezone);
      val.time = time.format('hh:mm A');
    });

    this.timezone = time.format('z');
  }

  ngOnInit(): void {
  }

}
