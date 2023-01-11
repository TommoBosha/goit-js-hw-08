
import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// console.log(galleryItems);
const galleryContainer = document.querySelector('.gallery');
const imgsCardsMarkup = creatImgCardsMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('afterbegin', imgsCardsMarkup);

function creatImgCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
        .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionDelay: 250,
    captionType: "alt",
    captionsData: "alt",
}); 