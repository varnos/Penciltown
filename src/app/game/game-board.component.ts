import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs'

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss']
})
export class GameBoardComponent implements OnInit {

  public diceToRoll: Subject<string> = new Subject<string>();

  constructor() { }

  ngOnInit(): void {
  }

  handleDiceRoll($event: string): void {
    this.diceToRoll.next($event);
  }

}
