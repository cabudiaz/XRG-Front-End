import { TestBed } from '@angular/core/testing';

import { AuthStravaService } from './auth-strava.service';

describe('AuthStravaService', () => {
  let service: AuthStravaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthStravaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
