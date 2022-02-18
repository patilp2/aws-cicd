import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatformWorkComponent } from './platform-work.component';

describe('PlatformWorkComponent', () => {
  let component: PlatformWorkComponent;
  let fixture: ComponentFixture<PlatformWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlatformWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatformWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
