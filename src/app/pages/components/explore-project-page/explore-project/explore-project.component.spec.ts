import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreProjectComponent } from './explore-project.component';

describe('ExploreProjectComponent', () => {
  let component: ExploreProjectComponent;
  let fixture: ComponentFixture<ExploreProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExploreProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
