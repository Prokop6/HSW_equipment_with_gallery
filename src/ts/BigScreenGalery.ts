import { Picture } from "./Picture";

export default class BigScreenGalery {
  constructor(photoSrc: Array<string>, imageWidth: number) {
    const gallery: HTMLDivElement = document.createElement("div");
    gallery.className = "big_gallery";
    const photos: Array<Picture> = photoSrc.map(singlePhoto => new Picture(singlePhoto, imageWidth));

    photos.forEach(photo => gallery.append(photo));

    return gallery;
  }
}
;
