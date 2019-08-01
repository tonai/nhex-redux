import { addArmyData } from '../services';
import { Armies, Army, Deck, HQArmyTile } from '../types';
import {
  battle,
  move,
  pushBack,
  smartBioDroid,
  smartCyborg,
  smartGaussCannon,
  smartGolemMK3,
  smartHQ,
  smartMother,
  smartNetFighter,
  smartOfficer,
  smartRipper,
  smartScout,
  smartTransporter,
  smartTwister,
  sniper,
  terror
} from '../tiles';

export const smartDeck: Deck = [
  battle,
  battle,
  battle,
  battle,
  pushBack,
  pushBack,
  pushBack,
  move,
  sniper,
  terror,
  terror,
  smartRipper,
  smartTwister,
  smartNetFighter,
  smartNetFighter,
  smartGaussCannon,
  smartGaussCannon,
  smartGaussCannon,
  smartGolemMK3,
  smartGolemMK3,
  smartCyborg,
  smartCyborg,
  smartTransporter,
  smartTransporter,
  smartTransporter,
  smartBioDroid,
  smartOfficer,
  smartOfficer,
  smartOfficer,
  smartOfficer,
  smartMother,
  smartMother,
  smartScout,
  smartScout
];

export const smartColor = '#909090';
export const addSmartArmyData = addArmyData(Armies.Smart, smartColor);

export const smartArmy: Army = {
  color: smartColor,
  deck: smartDeck.map(addSmartArmyData),
  hq: addSmartArmyData(smartHQ) as HQArmyTile
};
