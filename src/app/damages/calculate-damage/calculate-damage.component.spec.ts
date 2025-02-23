import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateDamageComponent } from './calculate-damage.component';

describe('CalculateDamageComponent', () => {
  let component: CalculateDamageComponent;
  let fixture: ComponentFixture<CalculateDamageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateDamageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateDamageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
