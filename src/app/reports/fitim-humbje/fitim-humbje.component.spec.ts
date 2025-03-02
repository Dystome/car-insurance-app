import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitimHumbjeComponent } from './fitim-humbje.component';

describe('FitimHumbjeComponent', () => {
  let component: FitimHumbjeComponent;
  let fixture: ComponentFixture<FitimHumbjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitimHumbjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitimHumbjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
