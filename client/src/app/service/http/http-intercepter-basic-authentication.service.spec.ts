import { TestBed } from '@angular/core/testing';

import { HttpIntercepterBasicAuthenticationService } from './http-intercepter-basic-authentication.service';

describe('HttpIntercepterBasicAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpIntercepterBasicAuthenticationService = TestBed.get(HttpIntercepterBasicAuthenticationService);
    expect(service).toBeTruthy();
  });
});
