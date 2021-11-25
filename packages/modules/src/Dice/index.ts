import { NumberDice } from './NumberDice';
export * from './Dice';

export const D6 = new NumberDice()
export const D4 = new NumberDice(4)
export const D9 = new NumberDice(9)
export const D12 = new NumberDice(12)