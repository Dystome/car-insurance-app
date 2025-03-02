import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShtoShitjeComponent } from './shto-shitje.component';

describe('ShtoShitjeComponent', () => {
  let component: ShtoShitjeComponent;
  let fixture: ComponentFixture<ShtoShitjeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShtoShitjeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShtoShitjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
