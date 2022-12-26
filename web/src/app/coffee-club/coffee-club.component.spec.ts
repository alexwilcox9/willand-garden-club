import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeeClubComponent } from './coffee-club.component';
import { DataService } from '../services/data.service';
import { DataServiceStub } from '../services/data.service.stub';
import { MomentModule } from 'ngx-moment';

describe('CoffeeClubComponent', () => {
  let component: CoffeeClubComponent;
  let fixture: ComponentFixture<CoffeeClubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoffeeClubComponent],
      imports: [MomentModule],
      providers: [{ provide: DataService, useClass: DataServiceStub }]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeeClubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
