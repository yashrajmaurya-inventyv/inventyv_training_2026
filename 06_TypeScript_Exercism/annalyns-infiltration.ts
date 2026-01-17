export function canExecuteFastAttack(knightIsAwake: boolean): boolean {
  return !knightIsAwake;
}

export function canSpy(knightIsAwake: boolean, archerIsAwake: boolean, prisonerIsAwake: boolean): boolean {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

export function canSignalPrisoner(archerIsAwake: boolean, prisonerIsAwake: boolean): boolean {
  if (!prisonerIsAwake) return false;
  return !archerIsAwake;
}

export function canFreePrisoner(
  k: boolean,
  a: boolean,
  p: boolean,
  d: boolean,
): boolean {
  return (d && !a) || (p && !a && !k);
}