import { Injectable } from '@angular/core';
import { Contact } from '../contact';
import { Config } from '../config';
import { Observable, of } from 'rxjs';
import { UpcomingEvent } from '../upcoming-event';

@Injectable({
  providedIn: 'root'
})
export class DataServiceStub {
  public fetchConfig(): Observable<Config> {
    return of({
      isFun: true,
      wordApiKey: '',
      flickrApiKey: '',
      flickrSecret: '',
      flickrGalleryId: '',
      flowerShow: { link: '', date: '' }
    });
  }

  public fetchContact(): Observable<Contact[]> {
    return of([
      {
        title: 'ham',
        name: 'michael'
      },
      {
        title: 'sandwich',
        name: 'bread',
        phone: '1231241334',
        email: 'test@test.com'
      }
    ]);
  }
  public fetchCoffee(): Observable<[]> {
    return of([]);
  }

  public fetchUpcomingEvents(): Observable<UpcomingEvent[]> {
    return of([
      {
        name: 'fake',
        date: '12/04/2020',
        time: '12:33',
        description: 'silly fake date',
        icon: 'landmark'
      }
    ]);
  }
}
