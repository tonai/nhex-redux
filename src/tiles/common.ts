import { ActionTile, ActionTiles, TileTypes } from '../types';

/** Actions */
export const battle: ActionTile = {
  type: ActionTiles.Battle,
  tileType: TileTypes.Action
};

export const move: ActionTile = {
  type: ActionTiles.Move,
  tileType: TileTypes.Action
};

export const pushBack: ActionTile = {
  type: ActionTiles.PushBack,
  tileType: TileTypes.Action
};

export const sniper: ActionTile = {
  type: ActionTiles.Sniper,
  tileType: TileTypes.Action
};

export const castling: ActionTile = {
  type: ActionTiles.Castling,
  tileType: TileTypes.Action
};

export const rotation: ActionTile = {
  type: ActionTiles.Rotation,
  tileType: TileTypes.Action
};

export const terror: ActionTile = {
  type: ActionTiles.Terror,
  tileType: TileTypes.Action
};
