import { Component, Input, ViewChild } from '@angular/core';
import { Photo } from '../flickr-data.js';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent {

  @Input() images: Photo[];
  @ViewChild('carousel') carousel: any;

  public displayCaption = true;

}
