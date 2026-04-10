const skillsList = (skills) => {
  const dominadas = skills.filter(skill => skill.state === "dominada");

  return dominadas.map(skill => `
    <article class="skill-card">
      <div class="skill-icon-wrapper">
        <img src="${skill.icon}" alt="${skill.name}" class="skill-icon">
      </div>
      <h3>${skill.name}</h3>
      <span class="skill-level">${skill.level}</span>
      <p class="skill-description">${skill.description}</p>
    </article>
  `).join(""); 
};

export default skillsList;