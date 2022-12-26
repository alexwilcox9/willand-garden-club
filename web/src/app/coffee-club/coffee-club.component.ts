import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import moment from 'moment';

@Component({
  selector: 'app-coffee-club',
  templateUrl: './coffee-club.component.html',
  styleUrls: ['./coffee-club.component.scss']
})
export class CoffeeClubComponent implements OnInit {
  public nextMeeting: moment.Moment;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.fetchCoffee().subscribe(allTimes => {
      if (allTimes.length > 0) {
        const momMeetingTimes: moment.Moment[] = allTimes.map((time: string) =>
          moment(time, 'DD/MM/YYYY')
        );
        const futureMeetingTimes: moment.Moment[] = momMeetingTimes.filter(
          time => time.isAfter()
        );
        this.nextMeeting = futureMeetingTimes[0];
      }
    });
  }
}
