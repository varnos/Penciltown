import { Component, OnInit } from '@angular/core';
import { ResourceType } from 'src/app/common/notification/models/resource-types';
import { ResourceBalance } from './resourceBalance';

@Component({
  selector: 'app-economy-area',
  templateUrl: './economy-area.component.html',
  styleUrls: ['./economy-area.component.scss']
})
export class EconomyAreaComponent implements OnInit {

  public balance: { title: string, value: ResourceBalance }[];

  constructor() {
    this.balance = [
      { title: 'wood', value: new ResourceBalance(ResourceType.WOOD) },
      { title: 'stone', value: new ResourceBalance(ResourceType.STONE) },
      { title: 'food', value: new ResourceBalance(ResourceType.FOOD) },
      { title: 'gold', value: new ResourceBalance(ResourceType.GOLD) },
      { title: 'population', value: new ResourceBalance(ResourceType.POPULATION) },
      { title: 'militia', value: new ResourceBalance(ResourceType.MILITIA) },
      { title: 'horses', value: new ResourceBalance(ResourceType.HORSE) },
      { title: 'clerics', value: new ResourceBalance(ResourceType.CLERIC) },
      { title: 'logicians', value: new ResourceBalance(ResourceType.LOGICIAN) },
      { title: 'reputation', value: new ResourceBalance(ResourceType.REPUTATION) }
    ]
  }

  ngOnInit(): void {
  }

  public borderBottom(rowTitle: string): boolean {
    return rowTitle.match(/^(gold|logicians)$/) !== null;
  }

}
