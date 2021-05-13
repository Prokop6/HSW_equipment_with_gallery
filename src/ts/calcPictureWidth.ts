export function calcPictureWidth(photoAmount: number): number {
  return Math.ceil(100 / photoAmount) - 1;
};