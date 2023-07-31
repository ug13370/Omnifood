import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealsSectionComponent } from './meals-section.component';

describe('MealsSectionComponent', () => {
  let component: MealsSectionComponent;
  let fixture: ComponentFixture<MealsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealsSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
