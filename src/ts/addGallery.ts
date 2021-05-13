import { Gallery } from "./Gallery";
import { isFullsizeScreen, handleWindowSizeChange } from "./source";

export function addGallery(hook: string, photoList: Array<string>): HTMLDivElement {
  let gallery = new Gallery(hook, photoList);

  window.addEventListener('resize', () => {
    if (gallery.isWidescreenGallery !== isFullsizeScreen) {
      handleWindowSizeChange(hook, gallery);
    }}
  );

  return gallery;
};
