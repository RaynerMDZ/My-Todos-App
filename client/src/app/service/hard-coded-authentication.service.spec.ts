import { TestBed } from '@angular/core/testing';

import { HardCodedAuthenticationService } from './hard-coded-authentication.service';

describe('HardCodedAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardCodedAuthenticationService = TestBed.get(HardCodedAuthenticationService);
    expect(service).toBeTruthy();
  });
});
