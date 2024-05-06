import { TestBed } from '@angular/core/testing';

import { EmptyCartService } from './empty-cart.service';

describe('EmptyCartService', () => {
  let service: EmptyCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmptyCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
