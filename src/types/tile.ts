import { Direction, Foundations, Modules } from './common';
import { SmartSoldierTiles, SmartModuleTiles, SmartFoundationTiles } from './smart';
import { VegasSoldierTiles, VegasModuleTiles, VegasFoundationTiles } from './vegas';

export enum TileTypes {
  Action = 'Action',
  Foundation = 'Foundation',
  HQ = 'HQ',
  Module = 'Module',
  Soldier = 'Soldier'
}

export enum ActionTiles {
  Battle = 'Battle',
  Castling = 'Castling',
  Move = 'Move',
  PushBack = 'PushBack',
  Rotation = 'Rotation',
  Sniper = 'Sniper',
  Terror = 'Terror'
}

export type HQTiles = 'HQ';

export type SoldierTiles = SmartSoldierTiles | VegasSoldierTiles;

export type ModuleTiles = SmartModuleTiles | VegasModuleTiles;

export type FoundationTiles = SmartFoundationTiles | VegasFoundationTiles;

export interface BaseTile {
  type: ActionTiles | SoldierTiles | ModuleTiles | FoundationTiles | HQTiles
  tileType: TileTypes
}

export interface ActionTile extends BaseTile {
  type: ActionTiles
  tileType: TileTypes.Action
}

export interface ClassicTile extends BaseTile {
  armor?: [boolean, boolean, boolean, boolean, boolean, boolean]
  direction?: Direction
  flashBack?: boolean
  initiative?: number | number[]
  melee?: [number, number, number, number, number, number]
  mobility?: boolean
  module?: [boolean, boolean, boolean, boolean, boolean, boolean]
  moduleType?: Modules
  percing?: [number, number, number, number, number, number]
  net?: [boolean, boolean, boolean, boolean, boolean, boolean]
  range?: [number, number, number, number, number, number]
  replace?: boolean
  toughness: number
  wounds: number
}

export interface HQTile extends ClassicTile {
  tileType: TileTypes.HQ,
  type: HQTiles
}

export interface SoldierTile extends ClassicTile {
  tileType: TileTypes.Soldier,
  type: SoldierTiles
}

export interface ModuleTile extends ClassicTile {
  tileType: TileTypes.Module,
  type: ModuleTiles
}

export interface FoundationTile extends BaseTile {
  foundationType: Foundations
  tileType: TileTypes.Foundation,
  type: FoundationTiles
}

export type Tile = HQTile | SoldierTile | ModuleTile | FoundationTile | ActionTile;
