import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePharmacyComponent } from './home-pharmacy.component';

describe('HomePharmacyComponent', () => {
  let component: HomePharmacyComponent;
  let fixture: ComponentFixture<HomePharmacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePharmacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePharmacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
