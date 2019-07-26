import {
  Foundations,
  FoundationTile,
  HQTile,
  Modules,
  ModuleTile,
  SoldierTile, TileTypes,
  VegasFoundationTiles,
  VegasModuleTiles,
  VegasSoldierTiles
} from '../types';

/** HQ */
export const vegasHQ: HQTile = {
  initiative: 0,
  melee: [0, 1, 1, 1, 1, 1],
  module: [true, false, false, false, false, false],
  moduleType: Modules.Takeover,
  tileType: TileTypes.HQ,
  type: 'HQ',
  toughness: 20,
  wounds: 0
};

/** Soldiers */
export const vegasMercenary: SoldierTile = {
  initiative: 1,
  range: [2, 0, 0, 0, 0, 0],
  tileType: TileTypes.Soldier,
  type: VegasSoldierTiles.Mercenary,
  toughness: 1,
  wounds: 0
};

export const vegasBodyguard: SoldierTile = {
  initiative: 2,
  melee: [1, 1, 0, 0, 0, 1],
  tileType: TileTypes.Soldier,
  type: VegasSoldierTiles.Bodyguard,
  toughness: 1,
  wounds: 0
};

export const vegasGuard: SoldierTile = {
  armor: [true, true, false, false, false, true],
  tileType: TileTypes.Soldier,
  type: VegasSoldierTiles.Guard,
  toughness: 2,
  wounds: 0
};

export const vegasMarksman: SoldierTile = {
  initiative: 3,
  range: [3, 0, 0, 0, 0, 0],
  tileType: TileTypes.Soldier,
  type: VegasSoldierTiles.Marksman,
  toughness: 1,
  wounds: 0
};

/** Modules */
export const vegasAgitator: ModuleTile = {
  module: [true, false, false, false, false, false],
  moduleType: Modules.Takeover,
  tileType: TileTypes.Module,
  type: VegasModuleTiles.Agitator,
  toughness: 1,
  wounds: 0
};

export const vegasSaboteur: ModuleTile = {
  module: [true, false, false, false, false, false],
  moduleType: Modules.Saboteur,
  tileType: TileTypes.Module,
  type: VegasModuleTiles.Saboteur,
  toughness: 1,
  wounds: 0
};

export const vegasMedic: ModuleTile = {
  module: [true, false, false, false, false, false],
  moduleType: Modules.Medic,
  tileType: TileTypes.Module,
  type: VegasModuleTiles.Medic,
  toughness: 1,
  wounds: 0
};

export const vegasScout: ModuleTile = {
  module: [true, false, false, false, false, false],
  moduleType: Modules.Scout,
  tileType: TileTypes.Module,
  type: VegasModuleTiles.Scout,
  toughness: 1,
  wounds: 0
};

/** Foundations */
export const vegasMine: FoundationTile = {
  foundationType: Foundations.Mine,
  tileType: TileTypes.Foundation,
  type: VegasFoundationTiles.Mine
};
