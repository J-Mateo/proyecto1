import { cheatsheets } from '../data/cheatsheets.js'; // Asegúrate que en la data se llame cheatsheets

export const initCheatsheets = () => { // Añadimos la 's' para que coincida con main.js
  const container = document.getElementById('cheatsheets-container');

  if (!container) return;

  container.innerHTML = '';

  cheatsheets.forEach(sheet => {
    const card = document.createElement('a');
    card.href = sheet.link;
    card.className = 'cheatsheet-card';

    card.innerHTML = `
      <div class="cheatsheet-icon-grid">
        <img src="${sheet.icon}" alt="${sheet.name}" class="cheatsheet-icon">
      </div>
      <h3>${sheet.name}</h3>
      <p>${sheet.description}</p>
    `;

    container.appendChild(card);
  });
};