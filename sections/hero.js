function renderHero() {
    const el = document.getElementById('hero');
    el.innerHTML = `
        <div class="hero-inner">
            <h1>Ho Wei Lun</h1>
            <p class="hero-tagline">
                <span class="tagline-static">Data Science & AI</span>
            </p>
            <div class="hero-cta">
                <a href="#projects" class="btn btn-primary">View Projects</a>
                <a href="#contact" class="btn btn-secondary">Contact Me</a>
                <a href="https://www.linkedin.com/in/ho-wei-lun-960207238/" target="_blank" class="btn btn-ghost">LinkedIn</a>
            </div>
        </div>
    `;
}
