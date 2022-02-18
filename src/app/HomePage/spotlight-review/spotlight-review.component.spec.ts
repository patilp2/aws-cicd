import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpotlightReviewComponent } from './spotlight-review.component';

describe('SpotlightReviewComponent', () => {
  let component: SpotlightReviewComponent;
  let fixture: ComponentFixture<SpotlightReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpotlightReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpotlightReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
