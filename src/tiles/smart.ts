import {
  Armies,
  HQTile,
  Modules,
  ModuleTile,
  SmartModuleTiles,
  SmartSoldierTiles,
  SoldierTile,
  TileTypes
} from '../types';

/** HQ */
export const smartHQ: HQTile = {
  army: Armies.Smart,
  initiative: 0,
  melee: [1, 1, 1, 1, 1, 1],
  module: [true, true, true, true, true, true],
  moduleType: Modules.Move,
  tileType: TileTypes.HQ,
  type: 'HQ',
  toughness: 20,
  wounds: 0
};

/** Soldiers */
export const smartRipper: SoldierTile = {
  army: Armies.Smart,
  initiative: 2,
  melee: [2, 0, 0, 0, 0, 0],
  tileType: TileTypes.Soldier,
  type: SmartSoldierTiles.Ripper,
  toughness: 1,
  wounds: 0
};

export const smartTwister: SoldierTile = {
  armor: [false, false, false, true, false, false],
  army: Armies.Smart,
  initiative: [2, 1],
  melee:  [2, 1, 0, 1, 0, 1],
  tileType: TileTypes.Soldier,
  type: SmartSoldierTiles.Twister,
  toughness: 1,
  wounds: 0
};

export const smartNetFighter: SoldierTile = {
  army: Armies.Smart,
  net: [true, false, false, false, false, false],
  tileType: TileTypes.Soldier,
  type: SmartSoldierTiles.NetFighter,
  toughness: 1,
  wounds: 0
};

export const smartGaussCannon: SoldierTile = {
  army: Armies.Smart,
  initiative: 2,
  percing: [1, 0, 0, 0, 0, 0],
  tileType: TileTypes.Soldier,
  type: SmartSoldierTiles.GaussCannon,
  toughness: 1,
  wounds: 0
};

export const smartGolemMK3: SoldierTile = {
  army: Armies.Smart,
  initiative: 2,
  range: [2, 0, 0, 0, 0, 0],
  tileType: TileTypes.Soldier,
  type: SmartSoldierTiles.GolemMK3,
  toughness: 1,
  wounds: 0
};

export const smartCyborg: SoldierTile = {
  army: Armies.Smart,
  initiative: 3,
  range: [1, 0, 0, 0, 0, 0],
  tileType: TileTypes.Soldier,
  type: SmartSoldierTiles.Cyborg,
  toughness: 1,
  wounds: 0
};

export const smartTransporter: SoldierTile = {
  armor: [true, false, false, false, false, true],
  army: Armies.Smart,
  mobility: true,
  replace: true,
  tileType: TileTypes.Soldier,
  type: SmartSoldierTiles.Transporter,
  toughness: 2,
  wounds: 0
};

export const smartBioDroid: SoldierTile = {
  army: Armies.Smart,
  flashBack: true,
  initiative: 3,
  range: [0, 1, 0, 0, 0, 1],
  tileType: TileTypes.Soldier,
  type: SmartSoldierTiles.BioDroid,
  toughness: 1,
  wounds: 0
};

/** Modules */
export const smartOfficer: ModuleTile = {
  army: Armies.Smart,
  module: [true, false, false, false, false, false],
  moduleType: Modules.Officer,
  tileType: TileTypes.Module,
  type: SmartModuleTiles.Officer,
  toughness: 1,
  wounds: 0
};

export const smartMother: ModuleTile = {
  army: Armies.Smart,
  module: [true, false, false, false, false, false],
  moduleType: Modules.Mother,
  tileType: TileTypes.Module,
  type: SmartModuleTiles.Mother,
  toughness: 1,
  wounds: 0
};

export const smartScout: ModuleTile = {
  army: Armies.Smart,
  module: [true, false, false, false, false, false],
  moduleType: Modules.Scout,
  tileType: TileTypes.Module,
  type: SmartModuleTiles.Scout,
  toughness: 1,
  wounds: 0
};
