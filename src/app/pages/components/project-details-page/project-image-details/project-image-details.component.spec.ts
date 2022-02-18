import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectImageDetailsComponent } from './project-image-details.component';

describe('ProjectImageDetailsComponent', () => {
  let component: ProjectImageDetailsComponent;
  let fixture: ComponentFixture<ProjectImageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectImageDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectImageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
