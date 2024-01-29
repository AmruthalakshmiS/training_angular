import { TestBed } from '@angular/core/testing';

import { BooksummaryService } from './booksummary.service';

describe('BooksummaryService', () => {
  let service: BooksummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
