import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {

  public name: string = 'Penciltown';
  public objective: string = 'Build 13 buildings';
  public mods: string = 'TTRs -2, Construct +S'

  constructor() { }

  ngOnInit(): void {
  }
}
