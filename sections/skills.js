function renderSkills() {
    const el = document.getElementById('skills');
    el.innerHTML = `
        <div class="section-header">
            <h2>Skills</h2>
            <div class="section-line"></div>
        </div>
        <div class="skill-tags">
            ${SKILLS.map(s => `<span class="skill-tag">${s}</span>`).join('')}
        </div>
    `;
}
