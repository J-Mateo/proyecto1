import { header, footer } from './templates/template.js';
import menu from './utils/menu.js';
import darkMode from './utils/darkMode.js';      // Importación por defecto (sin {})
import skillsList from './utils/skillsList.js';
import { skills } from './data/skills.js';        // Importación con nombre (con {})

// 1. Inyectar el HTML de los componentes
const headerContainer = document.getElementById('main-header');
const footerContainer = document.getElementById('main-footer');

if (headerContainer) headerContainer.innerHTML = header;
if (footerContainer) footerContainer.innerHTML = footer;

menu();

// 2. Ejecutar la lógica de Modo Oscuro
// Cambiamos inicializarModoOscuro() por darkMode() que es el nombre oficial
darkMode();

// 3. Renderizar la sección de Skills
const container = document.getElementById('skills-container');
if (container && skills) {
    container.innerHTML = skillsList(skills);
}