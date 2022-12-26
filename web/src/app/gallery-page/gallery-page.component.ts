import { Component } from '@angular/core';
import { Config } from '../config';
import { DataService } from '../services/data.service';
import { PhotoServiceService } from '../services/photo-service.service';
import { Photo, FlickrData } from '../flickr-data';

@Component({
  selector: 'app-gallery-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.scss']
})
export class GalleryPageComponent {

  public config: Config = new Config();
  public images: Photo[];
  public galleryUrl: string;
  public displayCaption = true;

  constructor(private photoService: PhotoServiceService, private dataService: DataService) {
    dataService.fetchConfig().subscribe((config) => {
      this.config = config;
      this.observePhotos();
    });
  }

  private observePhotos() {
    this.photoService.getPhotos(this.config).subscribe((data: FlickrData) => {
      this.galleryUrl = `${data.owner}/sets/${data.id}`;
      this.images = this.photoService.processPhotos(data.photo);
    });
  }
}
