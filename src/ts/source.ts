/*//currently not in use
const testPhoto = [
  "https://historycznesztukiwalki.pl/wp-content/uploads/2020/12/rekawice_1-scaled.jpg",
  "https://historycznesztukiwalki.pl/wp-content/uploads/2020/12/rekawice_2-scaled.jpg",
  "https://historycznesztukiwalki.pl/wp-content/uploads/2020/12/rekawice_3-scaled.jpg",
  "https://historycznesztukiwalki.pl/wp-content/uploads/2020/12/rekawice_4-scaled.jpg"
];
*/
// basic functions

import { createGalleryDependingOnScreensize } from "./createGalleryDependingOnScreensize";

export let isFullsizeScreen: boolean;

//needs work
export const handleWindowSizeChange = (hook, gallery) => {
  gallery = document.querySelector(`#${hook}`)
  gallery.oldContent = document.querySelector(`#${hook} .photo_gallery`)
  newContent = createGalleryDependingOnScreensize(gallery.photoList, gallery.gallerySize)

  gallery.oldContent = gallery.replaceChild(newContent, gallery.oldContent)
  
  gallery.isWidescreenGallery = isFullsizeScreen
};

const testFunction = function(arg) {
  return arg};

module.exports = {
testFunction : testFunction,
calcPictureWidth : calcPictureWidth
}