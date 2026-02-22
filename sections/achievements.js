function renderAchievements() {
    const el = document.getElementById('achievements');
    const chipsHTML = ACHIEVEMENTS.map(a => `
        <div class="achievement-chip glass-card-inner">
            <div class="achievement-text">
                <span class="achievement-title">${a.title}</span>
                <span class="achievement-sub">${a.subtitle}</span>
            </div>
        </div>
    `).join('');

    el.innerHTML = `
        <div class="section-header">
            <h2>Achievements</h2>
            <div class="section-line"></div>
        </div>
        <div class="achievements-grid">
            ${chipsHTML}
        </div>
    `;
}
