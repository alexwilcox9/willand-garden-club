import { TestBed } from '@angular/core/testing';

import { PhotoServiceService } from './photo-service.service';

describe('PhotoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhotoServiceService = TestBed.inject(PhotoServiceService);
    expect(service).toBeTruthy();
  });
});
