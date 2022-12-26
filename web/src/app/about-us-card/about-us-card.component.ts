import { Component, Input, SimpleChanges, OnChanges } from '@angular/core';
import { PhotoServiceService } from '../services/photo-service.service';
import { Photo } from '../flickr-data';
import { Config } from '../config';

@Component({
  selector: 'app-about-us-card',
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.scss']
})
export class AboutUsCardComponent implements OnChanges {

  @Input() config: Config;

  public image: Photo;
  public hasImage = false;
  public displayCaption = true;
  constructor(private photoService: PhotoServiceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.config.currentValue) {
      this.observePhotos();
    }
  }

  private observePhotos() {
    this.photoService.getPhotos(this.config).subscribe((data) => {
      const primaryPhoto = data.photo.filter((photo) => photo.id === data.primary);
      this.image = this.photoService.processPhotos(primaryPhoto)[0];
      this.hasImage = true;
    });
  }
}
