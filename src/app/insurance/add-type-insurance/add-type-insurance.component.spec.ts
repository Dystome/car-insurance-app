import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypeInsuranceComponent } from './add-type-insurance.component';
import { describe, beforeEach, it } from 'node:test';

describe('AddTypeInsuranceComponent', () => {
  let component: AddTypeInsuranceComponent;
  let fixture: ComponentFixture<AddTypeInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTypeInsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTypeInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 
});
function expect(component: AddTypeInsuranceComponent) {
  throw new Error('Function not implemented.');
}

