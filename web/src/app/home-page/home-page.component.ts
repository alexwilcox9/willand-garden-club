import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { Config, FlowerShow } from '../config';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  public config: Config;
  public flowerShow: FlowerShow = new FlowerShow();

  constructor(private dataService: DataService) {
    dataService.fetchConfig().subscribe((config) => {
      this.config = config;
      this.flowerShow = config.flowerShow;
    });
  }
}
