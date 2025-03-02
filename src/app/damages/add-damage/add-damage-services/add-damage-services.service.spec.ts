import { TestBed } from '@angular/core/testing';

import { AddDamageServicesService } from './add-damage-services.service';

describe('AddDamageServicesService', () => {
  let service: AddDamageServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddDamageServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
