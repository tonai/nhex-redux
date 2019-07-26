export enum VegasSoldierTiles {
  Bodyguard = 'Bodyguard',
  Guard = 'Guard',
  Marksman = 'Marksman',
  Mercenary = 'Mercenary'
}

export enum VegasModuleTiles {
  Agitator = 'Marksman',
  Medic = 'Medic',
  Saboteur = 'Saboteur',
  Scout = 'Scout'
}

export enum VegasFoundationTiles {
  Mine = 'Mine'
}

export type VegasTiles = VegasSoldierTiles | VegasModuleTiles | VegasFoundationTiles | 'HQ';
