import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { authguardGuard } from './authguard.guard';

describe('authguardGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authguardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
