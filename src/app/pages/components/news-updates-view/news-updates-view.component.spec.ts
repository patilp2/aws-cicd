import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUpdatesViewComponent } from './news-updates-view.component';

describe('NewsUpdatesViewComponent', () => {
  let component: NewsUpdatesViewComponent;
  let fixture: ComponentFixture<NewsUpdatesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsUpdatesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsUpdatesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
