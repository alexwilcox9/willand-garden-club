import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCardComponent } from './about-us-card.component';
import { DataService } from '../services/data.service';
import { DataServiceStub } from '../services/data.service.stub';
import { PhotoServiceService } from '../services/photo-service.service';
import { PhotoServiceServiceStub } from '../services/photo-service.service.stub';

describe('AboutUsCardComponent', () => {
  let component: AboutUsCardComponent;
  let fixture: ComponentFixture<AboutUsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutUsCardComponent],
      providers: [
        { provide: DataService, useClass: DataServiceStub },
        { provide: PhotoServiceService, useClass: PhotoServiceServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
