function renderExperience() {
    const el = document.getElementById('experience');
    const itemsHTML = EXPERIENCE.map(exp => `
        <div class="exp-item glass-card-inner">
            <div class="exp-header">
                <div class="exp-left">
                    <h3 class="exp-role">${exp.role}</h3>
                    <span class="exp-company">${exp.company}</span>
                </div>
                <span class="exp-period">${exp.period}</span>
            </div>
            <ul class="exp-highlights">
                ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    el.innerHTML = `
        <div class="section-header">
            <h2>Work Experience</h2>
            <div class="section-line"></div>
        </div>
        ${itemsHTML}
    `;
}
