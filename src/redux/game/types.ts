import { Armies, ArmyTile, BoardArmyTile, Phases } from '../../types';

export const GAME_INIT = 'GAME_INIT';

export interface GameInitAction {
  type: typeof GAME_INIT
  armies: Armies[]
}

export type GameActionTypes = GameInitAction;

export interface GameState {
  decks: ArmyTile[][]
  board: BoardArmyTile[][]
  currentPlayer: number
  phase: Phases
  playerHand: ArmyTile[]
  round: number
}
