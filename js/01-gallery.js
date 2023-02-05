import { galleryItems } from './gallery-items.js';
// Change code below this line


const refs = {
    gallery: document.querySelector('div.gallery'),
}

const gallery = galleryItems.map(item => 
   `<div class="gallery__item"><a class="gallery__link"><img src="${item.preview}", data-source="${item.original}", alt="${item.description}" class="gallery__image"></img></a></div>`
).join("");



refs.gallery.insertAdjacentHTML('beforeend', gallery)
refs.gallery.addEventListener('click', onGalleryItemClick)

function onGalleryItemClick(event) {

    if (event.target !== event.currentTarget && event.target.nodeName === 'IMG') {
        const instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="1280">
        `, {
            onShow: (instance) => window.addEventListener('keydown', onEscKeyPress),
            onClose: (instance) => window.removeEventListener('keydown', onEscKeyPress),
        })
        instance.show()

        function onEscKeyPress(event) {
            if (event.code === "Escape") {
                instance.close();
            }
        }
    }
}