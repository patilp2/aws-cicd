import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeadImageComponent } from './page-head-image.component';

describe('PageHeadImageComponent', () => {
  let component: PageHeadImageComponent;
  let fixture: ComponentFixture<PageHeadImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageHeadImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageHeadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
