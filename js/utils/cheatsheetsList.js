import { cheatsheets } from '../data/cheatsheets.js'; 
export const initCheatsheets = () => { 
  const container = document.getElementById('cheatsheets-container');

  if (!container) return;

  container.innerHTML = '';

  cheatsheets.forEach(sheet => {
 
    const descripcionHTML = sheet.description ? `<p>${sheet.description}</p>` : '';
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