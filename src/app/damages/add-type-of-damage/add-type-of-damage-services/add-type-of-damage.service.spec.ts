import { TestBed } from '@angular/core/testing';

import { AddTypeOfDamageService } from './add-type-of-damage.service';

describe('AddTypeOfDamageService', () => {
  let service: AddTypeOfDamageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddTypeOfDamageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
