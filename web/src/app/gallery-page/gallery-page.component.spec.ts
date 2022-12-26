import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryPageComponent } from './gallery-page.component';
import { PhotoServiceService } from '../services/photo-service.service';
import { PhotoServiceServiceStub } from '../services/photo-service.service.stub';
import { DataService } from '../services/data.service';
import { DataServiceStub } from '../services/data.service.stub';

describe('GalleryPageComponent', () => {
  let component: GalleryPageComponent;
  let fixture: ComponentFixture<GalleryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryPageComponent],
      providers: [
        { provide: DataService, useClass: DataServiceStub },
        { provide: PhotoServiceService, useClass: PhotoServiceServiceStub }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
