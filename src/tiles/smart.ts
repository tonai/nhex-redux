import { HQTile, Modules, ModuleTile, SmartModuleTiles, SmartSoldierTiles, SoldierTile, TileTypes } from '../types';

/** HQ */
export const smartHQ: HQTile = {
  initiative: 0,
  melee: [1, 1, 1, 1, 1, 1],
  module: [true, true, true, true, true, true],
  moduleType: Modules.Move,
  type: TileTypes.HQ,
  toughness: 20
};

/** Soldiers */
export const smartRipper: SoldierTile = {
  initiative: 2,
  melee: [2, 0, 0, 0, 0, 0],
  name: SmartSoldierTiles.Ripper,
  toughness: 1,
  type: TileTypes.Soldier
};

export const smartTwister: SoldierTile = {
  armor: [false, false, false, true, false, false],
  initiative: [2, 1],
  melee:  [2, 1, 0, 1, 0, 1],
  name: SmartSoldierTiles.Twister,
  toughness: 1,
  type: TileTypes.Soldier
};

export const smartNetFighter: SoldierTile = {
  name: SmartSoldierTiles.NetFighter,
  net: [true, false, false, false, false, false],
  toughness: 1,
  type: TileTypes.Soldier
};

export const smartGaussCannon: SoldierTile = {
  initiative: 2,
  name: SmartSoldierTiles.GaussCannon,
  percing: [1, 0, 0, 0, 0, 0],
  toughness: 1,
  type: TileTypes.Soldier
};

export const smartGolemMK3: SoldierTile = {
  initiative: 2,
  name: SmartSoldierTiles.GolemMK3,
  range: [2, 0, 0, 0, 0, 0],
  toughness: 1,
  type: TileTypes.Soldier
};

export const smartCyborg: SoldierTile = {
  initiative: 3,
  name: SmartSoldierTiles.Cyborg,
  range: [1, 0, 0, 0, 0, 0],
  toughness: 1,
  type: TileTypes.Soldier
};

export const smartTransporter: SoldierTile = {
  armor: [true, false, false, false, false, true],
  mobility: true,
  name: SmartSoldierTiles.Transporter,
  replace: true,
  toughness: 2,
  type: TileTypes.Soldier
};

export const smartBioDroid: SoldierTile = {
  flashBack: true,
  initiative: 3,
  name: SmartSoldierTiles.BioDroid,
  range: [0, 1, 0, 0, 0, 1],
  toughness: 1,
  type: TileTypes.Soldier
};

/** Modules */
export const smartOfficer: ModuleTile = {
  module: [true, false, false, false, false, false],
  moduleType: Modules.Officer,
  name: SmartModuleTiles.Officer,
  type: TileTypes.Module,
  toughness: 1
};

export const smartMother: ModuleTile = {
  module: [true, false, false, false, false, false],
  moduleType: Modules.Mother,
  name: SmartModuleTiles.Mother,
  toughness: 1,
  type: TileTypes.Module
};

export const smartScout: ModuleTile = {
  module: [true, false, false, false, false, false],
  moduleType: Modules.Scout,
  name: SmartModuleTiles.Scout,
  toughness: 1,
  type: TileTypes.Module
};
