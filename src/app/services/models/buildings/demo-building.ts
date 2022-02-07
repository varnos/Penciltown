import {BuildingTile, BuildingType, CostAtLevel, MapCoordinate, Rotation} from "../building.model";
import {ResourceType} from "../../../common/notification/models/resource-types";

export class DemoBuilding implements BuildingType{
  allowedResources: ResourceType[] = [ResourceType.WOOD, ResourceType.STONE, ResourceType.GOLD];
  buildingTilesAtNeutralRotation: BuildingTile[] = this.initBuildingTiles();
  costAtLevel: CostAtLevel[] = [{
    level: 0,
    buildCost: DemoBuilding.initBuildCost(),
    productionAndUpkeep: DemoBuilding.initProductionAndUpkeep(),
  }];
  name: string = 'Demo Building';
  tier: number = 0;

  getTileBuildingTiles(rootTile: MapCoordinate, rotation: Rotation): BuildingTile[] {
    return [];
  }

  onBuild(): void {
    console.log('onBuildTriggered');
  }

  onDamage(): void {
  }

  onRepair(): void {
  }

  onSpecial(): void {
  }

  private initBuildingTiles(): BuildingTile[]{
    return [[0,0],[1,0],[2,0],[0,1],[1,1],[0,2]].map(coordinate => new BuildingTile(coordinate[0], coordinate[1]));
  }

  private static initBuildCost(): Partial<Record<ResourceType, number>> {
    return {
      stone: 2,
      wood: 1
    };
  }

  private static initProductionAndUpkeep(): Partial<Record<ResourceType, number>> {
    return {
      cleric: 0,
      food: -1,
      wood: 2
    }
  }
}
