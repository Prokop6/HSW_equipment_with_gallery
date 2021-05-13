export function increment(current: number, max: number): number {
  if (current < 0) { return 0; }
  return current >= max ? 0 : current + 1;
};
