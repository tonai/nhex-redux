import { Armies, ArmyTile, BoardArmyTile, Phases } from '../../types';

export const GAME_INIT = 'GAME_INIT';
export const GAME_TILE_DROP = 'GAME_TILE_DROP';
export const GAME_TILE_DROP_CANCEL = 'GAME_TILE_DROP_CANCEL';
export const GAME_TILE_DROP_CONFIRM = 'GAME_TILE_DROP_CONFIRM';



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

export interface GameTileDropCancelAction {
  tile: BoardArmyTile
  type: typeof GAME_TILE_DROP_CANCEL
}

export interface GameTileDropConfirmAction {
  tile: BoardArmyTile
  type: typeof GAME_TILE_DROP_CONFIRM
}



export type GameCancelType = typeof GAME_TILE_DROP_CANCEL;
export type GameCancelAction = GameTileDropCancelAction;

export type GameConfirmType = typeof GAME_TILE_DROP_CONFIRM;
export type GameConfirmAction = GameTileDropConfirmAction;

export type GameActionTypes = GameInitAction | GameTileDropAction | GameCancelAction | GameConfirmAction;



export interface GameState {
  decks: ArmyTile[][]
  board: (BoardArmyTile | null)[][]
  cancelAction: null | GameCancelAction
  confirmAction: null | GameConfirmAction
  currentPlayer: number
  phase: Phases
  playerHand: (ArmyTile | null)[]
  round: number
}
