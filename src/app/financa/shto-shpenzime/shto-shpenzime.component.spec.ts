import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShtoShpenzimeComponent } from './shto-shpenzime.component';

describe('ShtoShpenzimeComponent', () => {
  let component: ShtoShpenzimeComponent;
  let fixture: ComponentFixture<ShtoShpenzimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShtoShpenzimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShtoShpenzimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
