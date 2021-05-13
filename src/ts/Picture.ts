export class Picture {
    picture: HTMLImageElement
  constructor(photoSrc: string, maxWidth: number) {
    let picture: HTMLImageElement = document.createElement("img");

    picture.src = photoSrc;
    picture.style.maxWidth = `${maxWidth}%`;
  };
};