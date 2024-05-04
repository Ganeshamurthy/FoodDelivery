import { TestBed } from '@angular/core/testing';

import { GetFoodService } from './get-food.service';

describe('GetFoodService', () => {
  let service: GetFoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetFoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
