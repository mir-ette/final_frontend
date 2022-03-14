import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrugSliderComponent } from './drug-slider.component';

describe('DrugSliderComponent', () => {
  let component: DrugSliderComponent;
  let fixture: ComponentFixture<DrugSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrugSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DrugSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
