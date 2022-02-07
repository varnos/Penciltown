import {createAction, props} from "@ngrx/store";
import {MapCoordinate} from "../../services/models/building.model";

export const setActiveCell = createAction(
  '[Cell] change active cell',
  props<MapCoordinate>()
);

export const clearActiveCell = createAction(
  '[Cell] clear active cell'
);
