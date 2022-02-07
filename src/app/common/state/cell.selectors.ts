import { createFeatureSelector } from "@ngrx/store";
import {ICellState} from "./cell.reducer";

export const selectCellState = createFeatureSelector<Readonly<ICellState>>('cell');
