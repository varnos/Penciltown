import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReputationTrackerComponent } from './reputation-tracker.component';

describe('ReputationTrackerComponent', () => {
  let component: ReputationTrackerComponent;
  let fixture: ComponentFixture<ReputationTrackerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReputationTrackerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReputationTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
