import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentUploadedComponent } from './recent-uploaded.component';

describe('RecentUploadedComponent', () => {
  let component: RecentUploadedComponent;
  let fixture: ComponentFixture<RecentUploadedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentUploadedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentUploadedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
