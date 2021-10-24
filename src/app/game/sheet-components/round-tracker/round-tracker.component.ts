import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-round-tracker',
  templateUrl: './round-tracker.component.html',
  styleUrls: ['./round-tracker.component.scss']
})
export class RoundTrackerComponent implements OnInit {

  public rounds: number[];
  public currentRound = 1;


  constructor() { 
    this.rounds = [];
    for(let i = 1; i<100; i++){
      this.rounds.push(i);
    }
  }

  
  ngOnInit(): void {
  }

}
