import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventComponent } from './event.component';
import { MomentModule } from 'ngx-moment';
import { UpcomingEvent } from '../upcoming-event';

describe('EventComponent', () => {
  let component: EventComponent;
  let fixture: ComponentFixture<EventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EventComponent],
      imports: [MomentModule]
    }).compileComponents();
  }));

  const fakeDate: UpcomingEvent = {
    name: 'fake',
    date: '12/04/2020',
    time: '12:33',
    description: 'silly fake date',
    icon: 'landmark'
  };

  beforeEach(() => {
    fixture = TestBed.createComponent(EventComponent);
    component = fixture.componentInstance;
    component.event = fakeDate;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
