import resources from '../data/resources.js';

export const initResources = () => {
    const tabsContainer = document.getElementById('tabs-buttons'); 
    const contentContainer = document.getElementById('tabs-content'); 

    if (!tabsContainer || !contentContainer) return;

    tabsContainer.innerHTML = '';
    contentContainer.innerHTML = '';

    resources.forEach((categoryData, index) => {
        const isFirst = index === 0;

        const button = document.createElement('button');
        button.className = `tab-btn ${isFirst ? 'active' : ''}`;
        button.textContent = categoryData.category;
        button.setAttribute('data-target', `panel-${index}`);
        tabsContainer.appendChild(button);

        const panel = document.createElement('div');
        panel.id = `panel-${index}`;
        panel.className = `tab-panel ${isFirst ? 'active' : ''}`;
        
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

        button.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-panel').forEach(pnl => pnl.classList.remove('active'));

            button.classList.add('active');
            panel.classList.add('active');
        });
    });
};