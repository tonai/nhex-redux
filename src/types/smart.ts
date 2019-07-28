export enum SmartSoldierTiles {
  BioDroid = 'BioDroid',
  Cyborg = 'Cyborg',
  GaussCannon = 'GaussCannon',
  GolemMK3 = 'GolemMK3',
  NetFighter = 'NetFighter',
  Ripper = 'Ripper',
  Transporter = 'Transporter',
  Twister = 'Twister'
}

export enum SmartModuleTiles {
  Mother = 'Mother',
  Officer = 'Officer',
  Scout = 'Scout'
}

export enum SmartFoundationTiles {}

export type SmartTiles = SmartSoldierTiles | SmartModuleTiles | SmartFoundationTiles | 'HQ';
