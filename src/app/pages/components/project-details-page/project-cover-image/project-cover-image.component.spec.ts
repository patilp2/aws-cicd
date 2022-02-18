import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCoverImageComponent } from './project-cover-image.component';

describe('ProjectCoverImageComponent', () => {
  let component: ProjectCoverImageComponent;
  let fixture: ComponentFixture<ProjectCoverImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCoverImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCoverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
