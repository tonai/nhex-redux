import { armies } from '../../armies';
import { getRandomInt, shuffle } from '../../services';
import { Phases } from '../../types';

import { GAME_INIT, GameActionTypes, GameState } from './types';

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
    case GAME_INIT:
      const decks = action.armies
        .map(army => armies[army])
        .map(army => shuffle(army.deck));
      const currentPlayer = getRandomInt(action.armies.length);
      return {
        ...state,
        board: [],
        currentPlayer,
        decks,
        phase: Phases.HQ,
        playerHand: [armies[action.armies[currentPlayer]].hq],
        round: 0
      };

    default:
      return state;
  }
}
