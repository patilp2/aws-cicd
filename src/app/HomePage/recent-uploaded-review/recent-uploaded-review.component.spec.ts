import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentUploadedReviewComponent } from './recent-uploaded-review.component';

describe('RecentUploadedReviewComponent', () => {
  let component: RecentUploadedReviewComponent;
  let fixture: ComponentFixture<RecentUploadedReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentUploadedReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentUploadedReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
