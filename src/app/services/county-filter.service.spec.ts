import { TestBed } from '@angular/core/testing';

import { CountyFilterService } from './county-filter.service';

describe('CountyFilterService', () => {
  let service: CountyFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountyFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
