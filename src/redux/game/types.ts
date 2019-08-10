import { Armies, ArmyTile, BoardArmyTile, Phases } from '../../types';

export const GAME_INIT = 'GAME_INIT';
export const GAME_TILE_DROP = 'GAME_TILE_DROP';

export interface GameInitAction {
  type: typeof GAME_INIT
  armies: Armies[]
}

export interface GameTileDropAction {
  col: number
  row: number
  tile: BoardArmyTile
  type: typeof GAME_TILE_DROP
}

export type GameActionTypes = GameInitAction | GameTileDropAction;

export interface GameState {
  decks: ArmyTile[][]
  board: (BoardArmyTile | null)[][]
  currentPlayer: number
  phase: Phases
  playerHand: ArmyTile[]
  round: number
}
