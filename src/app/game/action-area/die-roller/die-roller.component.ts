import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

export interface Die {
  dieSides: number
  rolledValues: number[];
  modifier: number;
  total: number;
}

@Component({
  selector: 'app-die-roller',
  templateUrl: './die-roller.component.html',
  styleUrls: ['./die-roller.component.scss']
})
export class DieRollerComponent implements OnInit, OnDestroy {

  @Input() public diceToRoll!: Subject<string>;
  public rolledDice: Die[] = [];

  constructor() { }

  ngOnInit(): void {
    this.diceToRoll.subscribe(($event: string) => this.handleDiceRoll($event))
  }

  ngOnDestroy(): void {
    this.diceToRoll.unsubscribe();
  }

  handleDiceRoll(diceCommand: string): void {
    const dice = diceCommand.split(',');
    const validCommand = /^(\d+[D]\d([+-]\d+)?(,|$))+$/;
    if (diceCommand.match(validCommand) === null) {
      console.error('encountered an invalid roll command, could not establish dice to roll in command:', diceCommand);
    } else {
      const result = dice.map((command: string) => this.parseAndRollDie(command))
      this.rolledDice = result.filter(d => d !== null) as Die[];
    }

  }

  private parseAndRollDie(command: string): Die {
    const dicePart = command.match(/\d+D\d/) as string[];
    const modifierPart = command.match(/[\+|-]\d+/) as string[];

    const numberOfDice = parseInt(dicePart[0].split('D')[0], 10);
    const dieSides = parseInt(dicePart[0].split('D')[1], 10);
    const modifier = modifierPart ? parseInt(modifierPart[0], 10) : 0;

    const rolledValues = [];

    for (let i = 0; i < numberOfDice; i++) {
      rolledValues.push(Math.ceil((Math.random() * dieSides)));
    }

    const total = rolledValues.reduce((a, b) => a + b) + modifier;

    return { dieSides, rolledValues, modifier, total }
  }
}
