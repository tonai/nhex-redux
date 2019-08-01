import { Foundations, Modules } from './common';
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

export type SoldierTiles = SmartSoldierTiles | VegasSoldierTiles;

export type ModuleTiles = SmartModuleTiles | VegasModuleTiles;

export type FoundationTiles = SmartFoundationTiles | VegasFoundationTiles;

export interface BaseTile {
  type: TileTypes
}

export interface ActionTile extends BaseTile {
  actionType: ActionTiles
  type: TileTypes.Action
}

export interface BaseBoardTile extends BaseTile {
  toughness: number
}

export interface HQTile extends BaseBoardTile {
  initiative: number
  melee: [number, number, number, number, number, number]
  module: [boolean, boolean, boolean, boolean, boolean, boolean]
  moduleType: Modules
  type: TileTypes.HQ
}

export interface SoldierTile extends BaseBoardTile {
  armor?: [boolean, boolean, boolean, boolean, boolean, boolean]
  flashBack?: boolean
  initiative?: number | number[]
  melee?: [number, number, number, number, number, number]
  mobility?: boolean
  percing?: [number, number, number, number, number, number]
  name: SoldierTiles
  net?: [boolean, boolean, boolean, boolean, boolean, boolean]
  range?: [number, number, number, number, number, number]
  replace?: boolean
  type: TileTypes.Soldier
}

export interface ModuleTile extends BaseBoardTile {
  armor?: [boolean, boolean, boolean, boolean, boolean, boolean]
  module: [boolean, boolean, boolean, boolean, boolean, boolean]
  moduleType: Modules
  name: ModuleTiles
  type: TileTypes.Module
}

export interface FoundationTile extends BaseTile {
  foundationType: Foundations
  name: FoundationTiles
  type: TileTypes.Foundation
}
