import itemTemplates from '../templates/gallery-items.hbs';
import menu from '../menu.json';

const markup = itemTemplates(menu);
const galleryRef = document.querySelector('.js-menu');

galleryRef.insertAdjacentHTML('beforeend', markup);