import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { UpcomingEvent } from '../upcoming-event';

@Component({
  selector: 'app-events-page',
  templateUrl: './events-page.component.html',
  styleUrls: ['./events-page.component.scss']
})
export class EventsPageComponent implements OnInit {
  public upcomingEvents: UpcomingEvent[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchUpcomingEvents().subscribe((events: UpcomingEvent[]) => {
      this.upcomingEvents = events;
    });
  }
}
