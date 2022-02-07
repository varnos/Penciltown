import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { determineTileType, TileType } from '../../../common/notification/models/tile-types';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import {MapCoordinate} from "../../../services/models/building.model";
import {Store} from "@ngrx/store";
import {ICellState} from "../../../common/state/cell.reducer";
import {selectCellState} from "../../../common/state/cell.selectors";

@Component({
  selector: 'app-game-map',
  templateUrl: './game-map.component.html',
  styleUrls: ['./game-map.component.scss']
})
export class GameMapComponent  {

  public matrix!: Observable<TileType[][]>;
  private cellState$: Observable<ICellState> = this.store.select(selectCellState);


  constructor(private http: HttpClient, private store: Store){
    this.matrix = this.constructMatrix('peaceful_meadow');
  }


  private constructMatrix(mapName: string): Observable<TileType[][]> {
    return this.http.get('assets/maps/peaceful_meadow', {responseType: 'text'})
    .pipe(map((text: string)=> this.textToTileTypes(text)))
  }

  private textToTileTypes(text: string): TileType[][]{
    const rows = text.split('\n');
    const result = rows.map(row => {
      const columns = row.split(' ');
      return columns.map(cell => {
        return determineTileType(cell)
      })
    });
    return result;
  }

  handleCellEnter($event: MapCoordinate) {
    //do something on cell enter
  }

  handleCellLeave($event: MapCoordinate) {
    //do something on cell leave
  }

  handleCellClick($event: MapCoordinate) {
    //do something on cell click
  }
}
