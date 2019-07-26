import { ActionTile, FoundationTile, HQTile, ModuleTile, SoldierTile } from './tile';

export enum Armies {
  Smart = 'Smart',
  Vegas = 'Vegas'
}

export interface ArmyTile {
  color: string
}

export interface HQArmyTile extends ArmyTile, HQTile {}
export interface SoldierArmyTile extends ArmyTile, SoldierTile {}
export interface ModuleArmyTile extends ArmyTile, ModuleTile {}
export interface FoundationArmyTile extends ArmyTile, FoundationTile {}

export type Tile = HQTile | SoldierTile | ModuleTile | FoundationTile | ActionTile;
export type FinalTile = HQArmyTile | SoldierArmyTile | ModuleArmyTile | FoundationArmyTile | ActionTile;

export type Deck = [
  Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile,
  Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile,
  Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile,
  Tile, Tile, Tile, Tile
];

export interface Army {
  color: string,
  deck: FinalTile[],
  hq: HQTile
}
