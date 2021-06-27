import { TestBed } from '@angular/core/testing';

import { AddRefillService } from './add-refill.service';

describe('AddRefillService', () => {
  let service: AddRefillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRefillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
