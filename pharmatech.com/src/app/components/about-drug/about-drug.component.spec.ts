import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDrugComponent } from './about-drug.component';

describe('AboutDrugComponent', () => {
  let component: AboutDrugComponent;
  let fixture: ComponentFixture<AboutDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
