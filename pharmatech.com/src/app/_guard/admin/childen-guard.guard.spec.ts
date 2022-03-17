import { TestBed } from '@angular/core/testing';

import { ChildenGuardGuard } from './childen-guard.guard';

describe('ChildenGuardGuard', () => {
  let guard: ChildenGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildenGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
