import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

import * as basicLightbox from "basiclightbox";

// Припустимо, що у вас є змінна, яка містить URL великого зображення
const imageUrl = "https://example.com/large-image.jpg";

// Створення інстанції модального вікна basicLightbox
const instance = basicLightbox.create(`<img src="${imageUrl}">`);

// Показ модального вікна
instance.show();
