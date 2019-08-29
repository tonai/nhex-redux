import { applyMiddleware, combineReducers, createStore as createStoreRedux } from 'redux';
import thunk from 'redux-thunk';

import { gameReducer } from './game';

export const rootReducer = combineReducers({
  game: gameReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export function createStore() {
  return createStoreRedux(rootReducer, applyMiddleware(thunk));
}
