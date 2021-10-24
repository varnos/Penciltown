import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reputation-tracker',
  templateUrl: './reputation-tracker.component.html',
  styleUrls: ['./reputation-tracker.component.scss']
})
export class ReputationTrackerComponent implements OnInit {

  public currentRep: number = 0;
  public repValues: number[];

  constructor() { 
    this.repValues = this.makeRepValues();
  }

  ngOnInit(): void {
  }

  public hasTransitionBorderRight(rep: number){
    return (rep % 3 === 0);
  }

  private makeRepValues(): number[]{
    const result = [];  
    for (let i = -23; i<55; i++){
        result.push(i);
      }
    return result;
  }

}
