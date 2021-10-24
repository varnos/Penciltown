import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { determineTileType, TileType } from '../../../common/notification/models/tile-types';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-map',
  templateUrl: './game-map.component.html',
  styleUrls: ['./game-map.component.scss']
})
export class GameMapComponent implements OnInit {

  public matrix!: Observable<TileType[][]>;
  public stubTileType: TileType = TileType.PLAINS;


  constructor(private http: HttpClient){
    this.matrix = this.constructMatrix('peaceful_meadow');
  }

  ngOnInit(): void {
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
}