import { TestBed, inject } from '@angular/core/testing';

import { StartTripService } from './start-trip.service';

describe('StartTripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StartTripService]
    });
  });

  it('should be created', inject([StartTripService], (service: StartTripService) => {
    expect(service).toBeTruthy();
  }));
});
