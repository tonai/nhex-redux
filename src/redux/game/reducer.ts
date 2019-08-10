import { armies } from '../../armies';
import { getRandomInt, shuffle } from '../../services';
import { Phases } from '../../types';

import { GAME_INIT, GAME_TILE_DROP, GameActionTypes, GameState } from './types';

const defaultState = {
  board: [],
  currentPlayer: 0,
  decks: [],
  phase: Phases.Init,
  playerHand: [],
  round: 0
};

export function gameReducer(state: GameState = defaultState, action: GameActionTypes): GameState {
  switch(action.type) {
    case GAME_INIT: {
      const board = [
        [null, null, null],
        [null, null, null, null],
        [null, null, null, null, null],
        [null, null, null, null],
        [null, null, null]
      ];
      const decks = action.armies
        .map(army => armies[army])
        .map(army => shuffle(army.deck));
      const currentPlayer = getRandomInt(action.armies.length);
      const phase = Phases.HQ;
      const playerHand = [armies[action.armies[currentPlayer]].hq];
      const round = 0;
      return { ...state, board, currentPlayer, decks, phase, playerHand, round };
    }

    case GAME_TILE_DROP: {
      const { col, row, tile } = action;
      const board = state.board.map(
        (column, i) => column.map(
          (cell, j) => i === col && j === row ? tile : cell
        )
      );
      return { ...state, board };
    }

    default:
      return state;
  }
}
