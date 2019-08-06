import { combineReducers, createStore as createStoreRedux } from 'redux';

import { gameReducer } from './game';

export const rootReducer = combineReducers({
  game: gameReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export function createStore() {
  return createStoreRedux(rootReducer);
}
