import { ThunkAction } from 'redux-thunk';

import { Armies, BoardArmyTile } from '../../types';
import { AppState } from '../store';
import {
  GAME_INIT,
  GAME_TILE_DROP,
  GAME_TILE_DROP_CANCEL,
  GAME_TILE_DROP_CONFIRM,
  GameInitAction,
  GameTileDropAction,
  GameCancelAction,
  GameConfirmAction,
  GameTileDropCancelAction,
  GameTileDropConfirmAction
} from './types';

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

export function gameTileDropCancel(tile: BoardArmyTile): GameTileDropCancelAction {
  return {
    tile,
    type: GAME_TILE_DROP_CANCEL
  };
}

export function gameTileDropConfirm(tile: BoardArmyTile): GameTileDropConfirmAction {
  return {
    tile,
    type: GAME_TILE_DROP_CONFIRM
  };
}

export function gameCancel(): ThunkAction<void, AppState, {}, GameCancelAction> {
  return function(dispatch, getState) {
    const { game: { cancelAction } } = getState();
    cancelAction && dispatch(cancelAction);
  }
}


export function gameConfirm(): ThunkAction<void, AppState, {}, GameConfirmAction> {
  return function(dispatch, getState) {
    const { game: { confirmAction } } = getState();
    confirmAction && dispatch(confirmAction);
  }
}
