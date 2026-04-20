import { header, footer } from './templates/template.js';
import menu from './utils/menu.js';
import darkMode from './utils/darkMode.js';
import skillsList from './utils/skillsList.js';
import { skills } from './data/skills.js';
import { initCheatsheets } from './utils/cheatsheetsList.js';
import { initResources } from './utils/resourcesGenerator.js';

// 1. Inyectar el HTML de los componentes (Header y Footer)
// Esto se ejecutará en TODAS las páginas que tengan estos IDs
const headerContainer = document.getElementById('main-header');
const footerContainer = document.getElementById('main-footer');

if (headerContainer) {
    headerContainer.innerHTML = header;
}
if (footerContainer) {
    footerContainer.innerHTML = footer;
}

// 2. Inicializar funcionalidades comunes
// Ejecutamos menu() y darkMode() después de inyectar el header para que encuentren los botones
menu();
darkMode();

// 3. Renderizar Skills (Solo si estamos en la sección de Skills)
const container = document.getElementById('skills-container');
if (container && skills) {
    container.innerHTML = skillsList(skills);
}

// 4. Inicializar secciones dinámicas
// Solo se ejecutan si el contenedor específico existe en el HTML actual

// Sección de la lista de Cheatsheets (Tarjetas del index)
if (document.getElementById('cheatsheets-container')) {
    initCheatsheets(); 
}

// Sección de Recursos (Pestañas de recursos.html)
if (document.getElementById('tabs-buttons')) {
    initResources();
}