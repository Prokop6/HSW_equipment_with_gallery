export function createTag(tag: string): HTMLElement {
  let newElement = document.createElement(`${tag}`);
  return newElement;
};