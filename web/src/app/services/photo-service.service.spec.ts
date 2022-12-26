import { TestBed } from '@angular/core/testing';

import { PhotoServiceService } from './photo-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('PhotoServiceService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: PhotoServiceService = TestBed.inject(PhotoServiceService);
    expect(service).toBeTruthy();
  });
});
