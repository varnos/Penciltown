import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomyAreaComponent } from './economy-area.component';

describe('EconomyAreaComponent', () => {
  let component: EconomyAreaComponent;
  let fixture: ComponentFixture<EconomyAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EconomyAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomyAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
