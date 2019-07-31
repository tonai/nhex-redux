import {
  Armies,
  Foundations,
  FoundationTile,
  HQTile,
  Modules,
  ModuleTile,
  SoldierTile,
  TileTypes,
  VegasFoundationTiles,
  VegasModuleTiles,
  VegasSoldierTiles
} from '../types';

/** HQ */
export const vegasHQ: HQTile = {
  army: Armies.Vegas,
  initiative: 0,
  melee: [0, 1, 1, 1, 1, 1],
  module: [true, false, false, false, false, false],
  moduleType: Modules.Agitator,
  tileType: TileTypes.HQ,
  type: 'HQ',
  toughness: 20,
  wounds: 0
};

/** Soldiers */
export const vegasMercenary: SoldierTile = {
  army: Armies.Vegas,
  initiative: 1,
  range: [2, 0, 0, 0, 0, 0],
  tileType: TileTypes.Soldier,
  type: VegasSoldierTiles.Mercenary,
  toughness: 1,
  wounds: 0
};

export const vegasBodyguard: SoldierTile = {
  army: Armies.Vegas,
  initiative: 2,
  melee: [1, 1, 0, 0, 0, 1],
  tileType: TileTypes.Soldier,
  type: VegasSoldierTiles.Bodyguard,
  toughness: 1,
  wounds: 0
};

export const vegasGuard: SoldierTile = {
  armor: [true, true, false, false, false, true],
  army: Armies.Vegas,
  tileType: TileTypes.Soldier,
  type: VegasSoldierTiles.Guard,
  toughness: 2,
  wounds: 0
};

export const vegasMarksman: SoldierTile = {
  army: Armies.Vegas,
  initiative: 3,
  range: [3, 0, 0, 0, 0, 0],
  tileType: TileTypes.Soldier,
  type: VegasSoldierTiles.Marksman,
  toughness: 1,
  wounds: 0
};

/** Modules */
export const vegasAgitator: ModuleTile = {
  army: Armies.Vegas,
  module: [true, false, false, false, false, false],
  moduleType: Modules.Agitator,
  tileType: TileTypes.Module,
  type: VegasModuleTiles.Agitator,
  toughness: 1,
  wounds: 0
};

export const vegasSaboteur: ModuleTile = {
  army: Armies.Vegas,
  module: [true, true, true, true, true, true],
  moduleType: Modules.Saboteur,
  tileType: TileTypes.Module,
  type: VegasModuleTiles.Saboteur,
  toughness: 1,
  wounds: 0
};

export const vegasMedic: ModuleTile = {
  army: Armies.Vegas,
  module: [true, false, false, false, false, false],
  moduleType: Modules.Medic,
  tileType: TileTypes.Module,
  type: VegasModuleTiles.Medic,
  toughness: 1,
  wounds: 0
};

export const vegasScout: ModuleTile = {
  army: Armies.Vegas,
  module: [true, false, false, false, false, false],
  moduleType: Modules.Scout,
  tileType: TileTypes.Module,
  type: VegasModuleTiles.Scout,
  toughness: 1,
  wounds: 0
};

/** Foundations */
export const vegasMine: FoundationTile = {
  army: Armies.Vegas,
  foundationType: Foundations.Mine,
  tileType: TileTypes.Foundation,
  type: VegasFoundationTiles.Mine
};
