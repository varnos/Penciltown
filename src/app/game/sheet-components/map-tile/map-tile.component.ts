import { Component, Input, OnInit } from '@angular/core';
import { TileType } from '../../../common/notification/models/tile-types';

@Component({
  selector: 'app-map-tile',
  templateUrl: './map-tile.component.html',
  styleUrls: ['./map-tile.component.scss']
})
export class MapTileComponent implements OnInit {

  @Input() public tileType!: TileType;

  constructor() { }

  ngOnInit(): void {
  }

  get imagePath(): string {
    return 'assets/tile-graphics/'+this.tileType+'.png';
  }

}
