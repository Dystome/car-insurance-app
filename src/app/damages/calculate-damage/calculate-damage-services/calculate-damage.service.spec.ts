import { TestBed } from '@angular/core/testing';

import { CalculateDamageService } from './calculate-damage.service';

describe('CalculateDamageService', () => {
  let service: CalculateDamageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculateDamageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
