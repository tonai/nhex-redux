import { Armies, ArmyTile, Tile } from '../types';

let id = 0;

export function addArmyData(army: Armies, color: string) {
  return function(tile: Tile): ArmyTile {
    return {
      ...tile,
      active: false,
      army,
      color,
      direction: 0,
      hidden: false,
      id: id++,
      wounds: 0
    };
  }
}
