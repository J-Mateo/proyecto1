import resources from '../data/resources.js';

export const initResources = () => {
    const tabsContainer = document.getElementById('tabs-buttons'); // Donde irán los botones
    const contentContainer = document.getElementById('tabs-content'); // Donde irán las listas

    if (!tabsContainer || !contentContainer) return;

    // Limpiamos contenedores por si acaso
    tabsContainer.innerHTML = '';
    contentContainer.innerHTML = '';

    resources.forEach((categoryData, index) => {
        const isFirst = index === 0;

        // 1. Crear el Botón de la Tab
        const button = document.createElement('button');
        button.className = `tab-btn ${isFirst ? 'active' : ''}`;
        button.textContent = categoryData.category;
        button.setAttribute('data-target', `panel-${index}`);
        tabsContainer.appendChild(button);

        // 2. Crear el Panel de Contenido
        const panel = document.createElement('div');
        panel.id = `panel-${index}`;
        panel.className = `tab-panel ${isFirst ? 'active' : ''}`;
        
        // Generar la lista de items para este panel
        const itemsHTML = categoryData.items.map(item => `
            <div class="resource-item">
                <a href="${item.url}" target="_blank" rel="noopener noreferrer">
                    <strong>${item.title}</strong>
                </a>
                <p>${item.note}</p>
            </div>
        `).join('');

        panel.innerHTML = itemsHTML;
        contentContainer.appendChild(panel);

        // 3. Evento Click para el intercambio
        button.addEventListener('click', () => {
            // Quitar clase active de todos los botones y paneles
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(pnl => pnl.classList.remove('active'));

            // Añadir active al botón clicado y a su panel correspondiente
            button.classList.add('active');
            panel.classList.add('active');
        });
    });
};