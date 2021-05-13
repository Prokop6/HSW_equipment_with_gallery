export function decrement(current: number, max: number): number {
  if (current > max) { return 0; }
  return current <= 0 ? max : current - 1;
};