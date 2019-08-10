import { Armies, BoardArmyTile } from '../../types';
import { GAME_INIT, GAME_TILE_DROP, GameInitAction, GameTileDropAction } from './types';

export function gameInit(armies: Armies[]): GameInitAction {
  return {
    armies,
    type: GAME_INIT
  };
}

export function gameTileDrop(col: number, row: number, tile: BoardArmyTile): GameTileDropAction {
  return {
    col,
    row,
    tile,
    type: GAME_TILE_DROP
  };
}
