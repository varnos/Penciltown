import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHeaderBarComponent } from './game-header-bar.component';

describe('GameHeaderBarComponent', () => {
  let component: GameHeaderBarComponent;
  let fixture: ComponentFixture<GameHeaderBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameHeaderBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHeaderBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
