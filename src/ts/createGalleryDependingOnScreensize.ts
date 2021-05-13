import { isFullsizeScreen } from "./source";
import BigScreenGalery from "./BigScreenGalery";
import { SmallScreenGalery } from "./SmallScreenGalery";
import { logThis } from "./logThis"

export const createGalleryDependingOnScreensize = (photoList: string, gallerySize: number) => {
  return isFullsizeScreen ?
    (logThis("making big gallery", `(${document.body.clientWidth})`),
      new BigScreenGalery(photoList, calcPictureWidth(gallerySize))) :
    (logThis("making small gallery", `(${document.body.clientWidth})`),
      new SmallScreenGalery(photoList, 0, gallerySize, 100)
    );
};
