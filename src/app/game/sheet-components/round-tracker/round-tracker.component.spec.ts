import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundTrackerComponent } from './round-tracker.component';

describe('RoundTrackerComponent', () => {
  let component: RoundTrackerComponent;
  let fixture: ComponentFixture<RoundTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoundTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
