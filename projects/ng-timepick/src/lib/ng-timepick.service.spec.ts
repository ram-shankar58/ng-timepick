import { TestBed } from '@angular/core/testing';

import { NgTimepickService } from './ng-timepick.service';

describe('NgTimepickService', () => {
  let service: NgTimepickService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgTimepickService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
