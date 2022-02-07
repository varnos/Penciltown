import {createReducer, on} from "@ngrx/store";
import {setActiveCell} from "./cell.state";
import {MapCoordinate} from "../../services/models/building.model";

export interface ICellState{
  activeCell?: MapCoordinate
}

export const initialState: ICellState = {};

export const cellReducer = createReducer(
  initialState,
  on(setActiveCell, (state, activeCell) => ({ ...state, activeCell }))
);
