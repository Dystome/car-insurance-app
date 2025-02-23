import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDamagesComponent } from './add-damages.component';

describe('AddDamagesComponent', () => {
  let component: AddDamagesComponent;
  let fixture: ComponentFixture<AddDamagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDamagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDamagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
