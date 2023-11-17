import { galleryItems } from "./gallery-items.js";

// Отримання посилання на контейнер галереї
const galleryContainer = document.getElementById("galleryContainer");

// Створення HTML-рядка з галереєю на основі масиву `galleryItems`
const galleryHTML = galleryItems
  .map(
    (item) => `
      <li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
        </a>
      </li>
    `
  )
  .join("");

// Вставка створеного HTML у контейнер галереї
galleryContainer.innerHTML = galleryHTML;

// Ініціалізація SimpleLightbox для всіх елементів галереї
const gallery = new SimpleLightbox(".gallery a");
