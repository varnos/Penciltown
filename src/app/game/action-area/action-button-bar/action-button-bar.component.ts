import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-action-button-bar',
  templateUrl: './action-button-bar.component.html',
  styleUrls: ['./action-button-bar.component.scss']
})
export class ActionButtonBarComponent implements OnInit {

  public buttonLabels: string[] = ['Test Buildings', 'Roll Dice!']
  //roll dice is called with standard dice syntax in a comma separated list: 1D6-2,2d3+5
  @Output() public rollDice = new EventEmitter<string>();


  constructor() { }

  ngOnInit(): void {
  }

  public handleEvent(argument: string) {
    if (argument === 'Roll Dice!'){
      this.rollDice.emit('2D6');
    } else if (argument === 'Test Buildings'){
      // handle building making
    } else {
      console.info('button pressed:', argument);
    }
  }


}
