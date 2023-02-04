import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    gallery: document.querySelector('ul.gallery'),
}

const gallery = galleryItems.map(item => 
   `<a class="gallery__item" href="${item.original}"><img src="${item.preview}" alt="${item.description}" title="${item.description}" class="gallery__image"></img></a>`
).join("");

refs.gallery.insertAdjacentHTML('beforeend', gallery)
const lightbox = new SimpleLightbox('.gallery a', {'captionDelay': 250});


