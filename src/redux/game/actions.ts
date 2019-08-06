import { Armies } from '../../types';
import { GAME_INIT, GameInitAction } from './types';

export function gameInit(armies: Armies[]): GameInitAction {
  return {
    armies,
    type: GAME_INIT
  };
}
