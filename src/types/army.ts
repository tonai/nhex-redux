import { HQTile, Tile } from './tile';

export enum Armies {
  Smart = 'Smart',
  Vegas = 'Vegas'
}

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
