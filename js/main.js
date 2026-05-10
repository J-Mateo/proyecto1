import { header, footer } from './templates/template.js';
import menu from './utils/menu.js';
import darkMode from './utils/darkMode.js';
import skillsList from './utils/skillsList.js';
import { skills } from './data/skills.js';
import { initCheatsheets } from './utils/cheatsheetsList.js';
import { initResources } from './utils/resourcesGenerator.js';
import { getWeather } from "./utils/weather.js";


const headerContainer = document.getElementById('main-header');
const footerContainer = document.getElementById('main-footer');

if (headerContainer) {
    headerContainer.innerHTML = header;
}
if (footerContainer) {
    footerContainer.innerHTML = footer;
}

menu();
darkMode();

const container = document.getElementById('skills-container');
if (container && skills) {
    container.innerHTML = skillsList(skills);
}

if (document.getElementById('cheatsheets-container')) {
    initCheatsheets(); 
}

if (document.getElementById('tabs-buttons')) {
    initResources();
}
getWeather();
