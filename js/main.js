import { header, footer } from './templates/template.js';
import menu from './utils/menu.js';
import darkMode from './utils/darkMode.js';
import skillsList from './utils/skillsList.js';
import { skills } from './data/skills.js';
import { initCheatsheets } from './utils/cheatsheetsList.js';
import { initResources } from './utils/resourcesGenerator.js';

// 1. Inyectar el HTML de los componentes
const headerContainer = document.getElementById('main-header');
const footerContainer = document.getElementById('main-footer');

if (headerContainer) headerContainer.innerHTML = header;
if (footerContainer) footerContainer.innerHTML = footer;

// 2. Inicializar Menu y DarkMode
menu();
darkMode();

// 3. Renderizar Skills
const container = document.getElementById('skills-container');
if (container && skills) {
    container.innerHTML = skillsList(skills);
}

// 4. Inicializar secciones dinámicas
// IMPORTANTE: Verifica que en cheatsheetsList.js el export se llame exactamente así
if (document.getElementById('cheatsheets-container')) {
    initCheatsheets(); // Con la 's' final
}

// IMPORTANTE: Verifica que en resourcesGenerator.js el export se llame exactamente así
if (document.getElementById('tabs-buttons')) {
    initResources();
}