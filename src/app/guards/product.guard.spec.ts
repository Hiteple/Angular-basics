import { TestBed } from '@angular/core/testing';

import { ProductGuardGuard } from './product.guard';

describe('ProductGuardGuard', () => {
  let guard: ProductGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
