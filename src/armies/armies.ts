import { Armies } from '../types';

import { smartArmy } from './smart';
import { vegasArmy } from './vegas';

export const armies = {
  [Armies.Smart]: smartArmy,
  [Armies.Vegas]: vegasArmy
};
