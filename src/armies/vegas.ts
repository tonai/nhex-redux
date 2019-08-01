import { addArmyData } from '../services';
import { Armies, Army, Deck, HQArmyTile } from '../types';
import {
  battle,
  castling,
  move,
  pushBack,
  rotation,
  sniper,
  vegasAgitator,
  vegasBodyguard,
  vegasGuard,
  vegasHQ,
  vegasMarksman,
  vegasMedic,
  vegasMercenary,
  vegasMine,
  vegasSaboteur,
  vegasScout
} from '../tiles';

export const vegasDeck: Deck = [
  battle,
  battle,
  battle,
  battle,
  battle,
  rotation,
  rotation,
  rotation,
  pushBack,
  pushBack,
  pushBack,
  castling,
  castling,
  move,
  move,
  move,
  sniper,
  vegasMercenary,
  vegasMercenary,
  vegasBodyguard,
  vegasBodyguard,
  vegasGuard,
  vegasGuard,
  vegasMarksman,
  vegasMarksman,
  vegasAgitator,
  vegasAgitator,
  vegasAgitator,
  vegasSaboteur,
  vegasMedic,
  vegasScout,
  vegasScout,
  vegasMine,
  vegasMine
];

export const vegasColor = '#723f14';
export const addVegasArmyData = addArmyData(Armies.Vegas, vegasColor);

export const vegasArmy: Army = {
  color: vegasColor,
  deck: vegasDeck.map(addVegasArmyData),
  hq: addVegasArmyData(vegasHQ) as HQArmyTile
};
