import { Armies, Direction } from './common';
import { ActionTile, FoundationTile, HQTile, ModuleTile, SoldierTile } from './tile';

export interface BaseArmyTile {
  army: Armies
  color: string
  direction: Direction
  wounds: number
}

export interface HQArmyTile extends HQTile, BaseArmyTile {}

export interface SoldierArmyTile extends SoldierTile, BaseArmyTile {}

export interface ModuleArmyTile extends ModuleTile, BaseArmyTile {}

export interface FoundationArmyTile extends FoundationTile, BaseArmyTile {}

export interface ActionArmyTile extends ActionTile, BaseArmyTile {}

export type BoardTile =  HQTile | SoldierTile | ModuleTile | FoundationTile;
export type Tile =  BoardTile | ActionTile;

export type BoardArmyTile =  HQArmyTile | SoldierArmyTile | ModuleArmyTile | FoundationArmyTile;
export type ArmyTile =  BoardArmyTile | ActionArmyTile;

export type Deck = [
  Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile,
  Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile,
  Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile,
  Tile, Tile, Tile, Tile
];

export interface Army {
  color: string,
  deck: ArmyTile[],
  hq: HQArmyTile
}
