import { Component, OnInit } from '@angular/core';
import { UpcomingEvent } from '../upcoming-event';
import { DataService } from '../services/data.service';
import moment from 'moment';
@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {
  public upcomingEvents: UpcomingEvent[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService
      .fetchUpcomingEvents()
      .subscribe((events: UpcomingEvent[]) => {
        const futureEvents = events.filter(event =>
          moment(event.date, 'DD/MM/YYYY').isAfter()
        );
        this.upcomingEvents = futureEvents.slice(0, 2);
      });
  }
}
