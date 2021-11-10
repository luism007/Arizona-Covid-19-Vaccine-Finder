import { TestBed } from '@angular/core/testing';

import { Cv19DataService } from './cv19-data.service';

describe('Cv19DataService', () => {
  let service: Cv19DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Cv19DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
