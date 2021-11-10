import { TestBed } from '@angular/core/testing';

import { CrossComponentCommService } from './cross-component-comm.service';

describe('CrossComponentCommService', () => {
  let service: CrossComponentCommService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrossComponentCommService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
