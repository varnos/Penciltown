import {ResourceType} from "../../common/notification/models/resource-types";

export interface Building {
  tiles: BuildingTile[];
  currentSize: number;
  buildingType: BuildingType;
  buildingNumber: number;
  isDamaged: boolean;
  rangeTo(otherBuilding: Building): number;
}

export class BuildingTile {
  building?: Building;
  position: MapCoordinate
  doors: Direction = 'none'
  rotation: Rotation = 0;

  constructor(x=0, y=0){
    this.position={x,y};
  }
}

export type Direction = 'north' | 'south' | 'east' | 'west' | 'none';
export type Rotation = 0 | 90 | 180 | 270;
export type MapCoordinate = {x: number; y: number}

export interface BuildingType {
  tier: number;
  name: string;
  costAtLevel: CostAtLevel[];
  buildingTilesAtNeutralRotation: BuildingTile[];
  allowedResources: ResourceType[];
  getTileBuildingTiles(rootTile: MapCoordinate, rotation: Rotation): BuildingTile[];
  onDamage(): void;
  onRepair(): void;
  onBuild(): void;
  onSpecial(): void;
}

export interface CostAtLevel {
  level: number;
  buildCost: Partial<Record<ResourceType, number>>;
  productionAndUpkeep: Partial<Record<ResourceType, number>>;
}
