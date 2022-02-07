import {Component, ComponentRef, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TileType } from '../../../common/notification/models/tile-types';
import {BuildingTile, MapCoordinate} from "../../../services/models/building.model";
import {ResourceType} from "../../../common/notification/models/resource-types";
import { Store } from '@ngrx/store';
import {setActiveCell} from "../../../common/state/cell.state";

@Component({
  selector: 'app-map-tile',
  templateUrl: './map-tile.component.html',
  styleUrls: ['./map-tile.component.scss']
})
export class MapTileComponent implements OnInit {

  @Input() public tileType!: TileType;
  @Input() public buildingPlaceholder: boolean = false;
  @Input() public building?: BuildingTile;
  @Input() public resource?: ResourceType;
  @Input() public coordinates!: MapCoordinate;

  @Output() public onMouseEnter = new EventEmitter<MapCoordinate>();
  @Output() public onMouseLeave = new EventEmitter<MapCoordinate>();
  @Output() public onClick = new EventEmitter<MapCoordinate>();


  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  get imagePath(): string {
    return 'assets/tile-graphics/'+this.tileType+'.png';
  }


  handleMouseEnter() {
    this.onMouseEnter.emit(this.coordinates);
    this.store.dispatch(setActiveCell(this.coordinates))
  }

  handleMouseLeave() {
    this.onMouseLeave.emit(this.coordinates);
  }

  handleClick() {
    this.onClick.emit(this.coordinates);
  }
}
