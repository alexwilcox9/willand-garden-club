import { TestBed } from '@angular/core/testing';

import { WordOfTheDayService } from './word-of-the-day.service';
import { HttpClientModule } from '@angular/common/http';

describe('WordOfTheDayService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    })
  );

  it('should be created', () => {
    const service: WordOfTheDayService = TestBed.inject(WordOfTheDayService);
    expect(service).toBeTruthy();
  });
});
