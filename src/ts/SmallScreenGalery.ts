import { Slider } from "./Slider";

export class SmallScreenGalery {
  constructor(photoSrc: string, currentID: number, maxID: number, imageWidth: number) {
    const sliderGallery = new Slider(photoSrc, currentID, maxID, imageWidth);
    sliderGallery.style.maxHeight = `${document.body.clientWidth}px`;

    return sliderGallery;
  }
}
;
