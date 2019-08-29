import { armies } from '../../armies';
import { getRandomInt, shuffle } from '../../services';
import { Phases } from '../../types';

import {
  GAME_INIT,
  GAME_TILE_DROP,
  GAME_TILE_DROP_CANCEL,
  GAME_TILE_DROP_CONFIRM,
  GameActionTypes,
  GameState
} from './types';

import { gameTileDropCancel, gameTileDropConfirm } from './actions';

const defaultState = {
  board: [],
  cancelAction: null,
  confirmAction: null,
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
      const playerHand = [armies[action.armies[currentPlayer]].hq, null, null];
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
      const cancelAction = gameTileDropCancel(tile);
      const confirmAction = gameTileDropConfirm(tile);
      const playerHand = state.playerHand.map(
        handTile => handTile && handTile.id === tile.id ? { ...handTile, hidden: true } : handTile
      );
      return { ...state, board, cancelAction, confirmAction, playerHand };
    }

    case GAME_TILE_DROP_CANCEL: {
      const { tile } = action;
      const board = state.board.map(
        column => column.map(
          cell => cell && cell.id === tile.id ? null : cell
        )
      );
      const playerHand = state.playerHand.map(
        handTile => handTile && handTile.id === tile.id ? { ...handTile, hidden: false } : handTile
      );
      const cancelAction = null;
      const confirmAction = null;
      return { ...state, board, cancelAction, confirmAction, playerHand };
    }

    case GAME_TILE_DROP_CONFIRM: {
      const { tile } = action;
      const board = state.board.map(
        column => column.map(
          cell =>  cell && cell.id === tile.id ? { ...cell, active: false } : cell
        )
      );
      const playerHand = state.playerHand.map(
        handTile => handTile && handTile.id === tile.id ? null : handTile
      );
      const cancelAction = null;
      const confirmAction = null;
      return { ...state, board, cancelAction, confirmAction, playerHand };
    }

    default:
      return state;
  }
}
