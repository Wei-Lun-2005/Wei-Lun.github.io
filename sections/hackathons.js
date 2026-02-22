function renderHackathons() {
    const el = document.getElementById('hackathons');
    const tierColors = { gold: '#FFD700', silver: '#C0C0C0', bronze: '#CD7F32' };

    const cardsHTML = HACKATHONS.map(h => `
        <div class="hackathon-card glass-card-inner">
            <div class="hackathon-header">
                <div class="hackathon-left">
                    <h3 class="hackathon-name">${h.name}</h3>
                    <span class="hackathon-organiser">${h.organiser} · ${h.location}</span>
                </div>
                <div class="hackathon-right">
                    <span class="hackathon-result" style="color: ${tierColors[h.resultTier] || '#aaddff'}">${h.result}</span>
                    <span class="hackathon-date">${h.date}</span>
                </div>
            </div>
            <p class="hackathon-desc">${h.description}</p>
            <ul class="hackathon-highlights">
                ${h.highlights.map(hl => `<li>${hl}</li>`).join('')}
            </ul>
            <div class="hackathon-tags">
                ${h.tags.map(t => `<span class="skill-tag">${t}</span>`).join('')}
            </div>
        </div>
    `).join('');

    el.innerHTML = `
        <div class="section-header">
            <h2>Hackathons</h2>
            <div class="section-line"></div>
        </div>
        ${cardsHTML}
    `;
}
