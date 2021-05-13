import { createTag } from "./createTag"
export class EmptyGallery {
  className: string;
  photoList: any;
  currentPhotoID: number;
  gallerySize: any;
  innerHTML: HTMLDivElement;
  constructor(photoList: Array<string>) {
     this.innerHTML = document.createElement("div");

      this.innerHTML.className = "photo_gallery";
      this.photoList = photoList;
      this.currentPhotoID = 0;
      this.gallerySize = photoList.length;

  }
};
