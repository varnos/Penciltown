export enum TileType {
    BLOCKER='blocker',
    CRAG='crag',
    FAULT='fault',
    FOREST='forest',
    GEM='gem',
    LORESTONE='lore_stone',
    MARSH='marsh',
    OLDROAD='old_road',
    PLAINS='plains',
    ROCKY='rocky',
    INVALID='invalid'
}

export const determineTileType = (code: string): TileType => {
    let tileType: TileType = TileType.INVALID;
    switch(code.trim()){
      case 'B':
        tileType = TileType.BLOCKER;
        break;
      case 'C':
        tileType = TileType.CRAG;
        break;
      case 'A':
        tileType = TileType.FAULT;
        break;
      case 'F':
        tileType = TileType.FOREST;
        break;
      case 'G':
        tileType = TileType.GEM;
        break;
      case 'L':
        tileType = TileType.LORESTONE;
        break;
      case 'M':
        tileType = TileType.MARSH;
        break;
      case 'O':
        tileType = TileType.OLDROAD;
        break;
      case 'P':
        tileType = TileType.PLAINS;
        break;
      case 'R':
        tileType = TileType.ROCKY;
        break;
    }
    if (tileType === TileType.INVALID) console.log(code)
    return tileType;
}