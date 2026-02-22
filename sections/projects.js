function renderProjects() {
    const el = document.getElementById('projects');
    const itemsHTML = PROJECTS.map((p, pi) => `
        <div class="exp-item glass-card-inner">
            <div class="exp-header">
                <div class="exp-left">
                    <h3 class="exp-role">${p.title}</h3>
                    <span class="exp-company">${p.context}</span>
                </div>
                ${p.github ? `<a href="${p.github}" target="_blank" class="project-link">GitHub &nearr;</a>` : ''}
            </div>
            <ul class="exp-highlights">
                ${p.highlights.map(h => `<li>${h}</li>`).join('')}
            </ul>
            ${p.images && p.images.length > 0 ? `
            <div class="proj-scroller">
                ${p.images.map(img => `
                <div class="proj-scroller-item">
                    <img src="${img.src}" alt="${img.caption}">
                    <div class="proj-scroller-caption">${img.caption}</div>
                </div>
                `).join('')}
            </div>` : ''}
        </div>
    `).join('');

    el.innerHTML = `
        <div class="section-header">
            <h2>Projects</h2>
            <div class="section-line"></div>
        </div>
        ${itemsHTML}
    `;

    setTimeout(initProjectScrollers, 0);
}

function initProjectScrollers() {
    const scrollers = document.querySelectorAll('.proj-scroller');

    scrollers.forEach(scroller => {
        let isDown = false;
        let startX;
        let scrollLeft;

        // Mouse Drag to Scroll
        scroller.addEventListener('mousedown', (e) => {
            if (e.button !== 0) return; // Only left click allowed
            isDown = true;
            scroller.classList.add('is-dragging');
            startX = e.pageX - scroller.offsetLeft;
            scrollLeft = scroller.scrollLeft;
            // Disable text selection during drag
            scroller.style.userSelect = 'none';
        });

        scroller.addEventListener('mouseleave', () => {
            isDown = false;
            scroller.classList.remove('is-dragging');
            scroller.style.userSelect = '';
        });

        scroller.addEventListener('mouseup', () => {
            isDown = false;
            scroller.classList.remove('is-dragging');
            scroller.style.userSelect = '';
        });

        scroller.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scroller.offsetLeft;
            const walk = (x - startX) * 2; // Scroll speed multiplier
            scroller.scrollLeft = scrollLeft - walk;
        });

        // Calculate Focus Item based on scroll
        const items = scroller.querySelectorAll('.proj-scroller-item');
        const updateFocus = () => {
            let minDistance = Infinity;
            let focusIndex = 0;
            const containerCenter = scroller.scrollLeft + scroller.clientWidth / 2;

            items.forEach((item, index) => {
                const itemCenter = item.offsetLeft + item.clientWidth / 2;
                const distance = Math.abs(containerCenter - itemCenter);
                if (distance < minDistance) {
                    minDistance = distance;
                    focusIndex = index;
                }
            });

            items.forEach((item, index) => {
                if (index === focusIndex) {
                    item.classList.add('active-item');
                } else {
                    item.classList.remove('active-item');
                }
            });
        };

        scroller.addEventListener('scroll', updateFocus);
        window.addEventListener('resize', updateFocus);

        // Initial call
        if (items.length > 0) {
            updateFocus();
        }
    });
}
