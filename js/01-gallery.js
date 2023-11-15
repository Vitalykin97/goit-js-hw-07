import * as basicLightbox from "basiclightbox";

// Приклад: URL зображення
const imageUrl = "https://example.com/image.jpg";

const instance = basicLightbox.create(`<img src="${imageUrl}" />`);

instance.show();

const gallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
      <li class="gallery__item">
        <a class="gallery__link" href='https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    )
    .join("");
}

gallery.innerHTML = createGalleryMarkup(galleryItems);

gallery.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" alt="${event.target.alt}">
  `);

  instance.show();
});
