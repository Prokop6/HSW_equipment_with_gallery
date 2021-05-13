import { createTag } from "./createTag";
import { Picture } from "./Picture";
import { Interface } from "./Interface";


export class Slider {
  constructor(photoSrc: string, currentID: number, maxID: number, imageWidth: number) {
    const slider = createTag('div');
    slider.className = "slider";

    slider.append(new Picture(photoSrc[currentID], imageWidth));
    slider.append(new Interface(currentID, maxID));

    return slider;
  }
}
;
