import { ActionTile, FoundationTile, HQTile, ModuleTile, SoldierTile } from './tile';

export type BoardTile = HQTile | SoldierTile | ModuleTile;
export type ArmyTile = BoardTile | FoundationTile;
export type Tile = ArmyTile | ActionTile;

export type Deck = [
  Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile,
  Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile,
  Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile, Tile,
  Tile, Tile, Tile, Tile
];

export interface Army {
  color: string,
  deck: Deck,
  hq: HQTile
}
