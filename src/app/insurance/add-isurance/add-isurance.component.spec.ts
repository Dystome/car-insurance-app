import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIsuranceComponent } from './add-isurance.component';

describe('AddIsuranceComponent', () => {
  let component: AddIsuranceComponent;
  let fixture: ComponentFixture<AddIsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddIsuranceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
