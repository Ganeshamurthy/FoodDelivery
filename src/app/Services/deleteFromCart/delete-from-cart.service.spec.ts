import { TestBed } from '@angular/core/testing';

import { DeleteFromCartService } from './delete-from-cart.service';

describe('DeleteFromCartService', () => {
  let service: DeleteFromCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteFromCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
