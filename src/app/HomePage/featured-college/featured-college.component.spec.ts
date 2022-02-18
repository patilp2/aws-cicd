import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedCollegeComponent } from './featured-college.component';

describe('FeaturedCollegeComponent', () => {
  let component: FeaturedCollegeComponent;
  let fixture: ComponentFixture<FeaturedCollegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedCollegeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
