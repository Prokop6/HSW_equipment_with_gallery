import { createGalleryDependingOnScreensize } from "./createGalleryDependingOnScreensize";
import { EmptyGallery } from "./EmptyGallery";
import { logThis } from "./logThis";
import { isFullsizeScreen } from "./source";

export class Gallery {
    innerHTML: HTMLDivElement;

  constructor(hook: string, photoList: Array<string>) {
    logThis("make gallery for", hook);

    this.innerHTML = new EmptyGallery(photoList).innerHTML;
    document.querySelector(`#${hook}`).append(gallery);

    gallery.isWidescreenGallery = isFullsizeScreen;
    logThis("is this gallery big?", gallery.isWidescreenGallery);

    gallery.content = createGalleryDependingOnScreensize(gallery.photoList, gallery.gallerySize);

    gallery.append(gallery.content);

    return gallery;
  }
}
;
