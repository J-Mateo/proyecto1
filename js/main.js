import { header, footer } from './templates/template.js';


const headerContainer = document.getElementById('main-header');
const footerContainer = document.getElementById('main-footer');


if (headerContainer) {
    headerContainer.innerHTML = header;
}

if (footerContainer) {
    footerContainer.innerHTML = footer;
}