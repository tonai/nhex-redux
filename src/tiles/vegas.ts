import {
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
  initiative: 0,
  melee: [0, 1, 1, 1, 1, 1],
  module: [true, false, false, false, false, false],
  moduleType: Modules.Agitator,
  toughness: 20,
  type: TileTypes.HQ
};

/** Soldiers */
export const vegasMercenary: SoldierTile = {
  initiative: 1,
  name: VegasSoldierTiles.Mercenary,
  range: [2, 0, 0, 0, 0, 0],
  type: TileTypes.Soldier,
  toughness: 1
};

export const vegasBodyguard: SoldierTile = {
  initiative: 2,
  melee: [1, 1, 0, 0, 0, 1],
  name: VegasSoldierTiles.Bodyguard,
  type: TileTypes.Soldier,
  toughness: 1
};

export const vegasGuard: SoldierTile = {
  armor: [true, true, false, false, false, true],
  name: VegasSoldierTiles.Guard,
  type: TileTypes.Soldier,
  toughness: 2
};

export const vegasMarksman: SoldierTile = {
  initiative: 3,
  name: VegasSoldierTiles.Marksman,
  range: [3, 0, 0, 0, 0, 0],
  type: TileTypes.Soldier,
  toughness: 1
};

/** Modules */
export const vegasAgitator: ModuleTile = {
  module: [true, false, false, false, false, false],
  moduleType: Modules.Agitator,
  name: VegasModuleTiles.Agitator,
  type: TileTypes.Module,
  toughness: 1
};

export const vegasSaboteur: ModuleTile = {
  module: [true, true, true, true, true, true],
  moduleType: Modules.Saboteur,
  name: VegasModuleTiles.Saboteur,
  type: TileTypes.Module,
  toughness: 1
};

export const vegasMedic: ModuleTile = {
  module: [true, false, false, false, false, false],
  moduleType: Modules.Medic,
  name: VegasModuleTiles.Medic,
  type: TileTypes.Module,
  toughness: 1
};

export const vegasScout: ModuleTile = {
  module: [true, false, false, false, false, false],
  moduleType: Modules.Scout,
  name: VegasModuleTiles.Scout,
  type: TileTypes.Module,
  toughness: 1
};

/** Foundations */
export const vegasMine: FoundationTile = {
  foundationType: Foundations.Mine,
  name: VegasFoundationTiles.Mine,
  type: TileTypes.Foundation
};
