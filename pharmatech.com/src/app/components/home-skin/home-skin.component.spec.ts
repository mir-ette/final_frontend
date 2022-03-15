import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSkinComponent } from './home-skin.component';

describe('HomeSkinComponent', () => {
  let component: HomeSkinComponent;
  let fixture: ComponentFixture<HomeSkinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeSkinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSkinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
