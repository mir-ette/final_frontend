import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeDrugComponent } from './home-drug.component';

describe('HomeDrugComponent', () => {
  let component: HomeDrugComponent;
  let fixture: ComponentFixture<HomeDrugComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeDrugComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeDrugComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
