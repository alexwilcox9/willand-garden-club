import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, flatMap } from 'rxjs/operators';
import { FlickrData, FlickrResp, Photo, FlickrPhoto } from '../flickr-data';
import { PhotoServiceService } from './photo-service.service';
import { DataServiceStub } from './data.service.stub';

@Injectable({
  providedIn: 'root'
})
export class PhotoServiceServiceStub {
  /**
   * Return array of trimmed down photo objects
   *
   * @param photos data about the photo
   * @returns an array of photos
   */
  public processPhotos(photos: FlickrPhoto[]): Photo[] {
    return [{ id: 'id', url: 'url', title: 'title' }];
  }

  public getPhotos(config): Observable<FlickrData> {
    return of(new FlickrData());
  }
}
