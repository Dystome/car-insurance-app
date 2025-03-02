import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldemagesComponent } from './alldemages.component';

describe('AlldemagesComponent', () => {
  let component: AlldemagesComponent;
  let fixture: ComponentFixture<AlldemagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlldemagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlldemagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
