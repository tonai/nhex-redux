import { Armies, ArmyTile, Tile } from '../types';

export function addArmyData(army: Armies, color: string) {
  return function(tile: Tile): ArmyTile {
    return {
      ...tile,
      army,
      color,
      direction: 0,
      wounds: 0
    };
  }
}
