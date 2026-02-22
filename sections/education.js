function renderEducation() {
    const el = document.getElementById('education');
    const itemsHTML = EDUCATION.map(edu => `
        <div class="edu-item glass-card-inner">
            <div class="edu-header">
                <div class="edu-left">
                    <h3 class="edu-degree">${edu.degree}</h3>
                    <span class="edu-institution">${edu.institution}</span>
                </div>
                <span class="edu-period">${edu.period}</span>
            </div>
            <div class="edu-meta">
                ${edu.honours ? `<span class="edu-badge">${edu.honours}</span>` : ''}
                <span class="edu-gpa">${edu.gpa}</span>
            </div>
            <ul class="edu-highlights">
                ${edu.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    el.innerHTML = `
        <div class="section-header">
            <h2>Education</h2>
            <div class="section-line"></div>
        </div>
        ${itemsHTML}
    `;
}
