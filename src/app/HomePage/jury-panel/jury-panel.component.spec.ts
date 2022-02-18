import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuryPanelComponent } from './jury-panel.component';

describe('JuryPanelComponent', () => {
  let component: JuryPanelComponent;
  let fixture: ComponentFixture<JuryPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuryPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuryPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
