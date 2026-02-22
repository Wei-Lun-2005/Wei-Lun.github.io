// ============================================================
// PARTICLE CANVAS (preserved from original)
// ============================================================
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

let mouse = { x: undefined, y: undefined, radius: 180 };

window.addEventListener('mousemove', e => { mouse.x = e.x; mouse.y = e.y; });
window.addEventListener('mouseout', () => { mouse.x = undefined; mouse.y = undefined; });

class Particle {
    constructor(x, y, vx, vy, size, color) {
        this.x = x; this.y = y;
        this.vx = vx; this.vy = vy;
        this.size = size; this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        if (this.x > canvas.width || this.x < 0) this.vx = -this.vx;
        if (this.y > canvas.height || this.y < 0) this.vy = -this.vy;
        if (mouse.x !== undefined && mouse.y !== undefined) {
            let dx = mouse.x - this.x, dy = mouse.y - this.y;
            let dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < mouse.radius) {
                const force = (mouse.radius - dist) / mouse.radius;
                this.x -= (dx / dist) * force * 1.5;
                this.y -= (dy / dist) * force * 1.5;
            }
        }
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    const count = (canvas.height * canvas.width) / 10000;
    for (let i = 0; i < count; i++) {
        const size = Math.random() * 2 + 0.5;
        particlesArray.push(new Particle(
            Math.random() * (innerWidth - size * 4) + size * 2,
            Math.random() * (innerHeight - size * 4) + size * 2,
            (Math.random() * 0.5) - 0.25,
            (Math.random() * 0.5) - 0.25,
            size,
            'rgba(200, 220, 255, 0.8)'
        ));
    }
}

function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
            const dx = particlesArray[a].x - particlesArray[b].x;
            const dy = particlesArray[a].y - particlesArray[b].y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 12000) {
                ctx.strokeStyle = `rgba(200, 220, 255, ${(1 - d2 / 12000) * 0.25})`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                ctx.stroke();
            }
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particlesArray.forEach(p => p.update());
    connect();
}

window.addEventListener('resize', () => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});

init();
animate();

// ============================================================
// RENDER ALL SECTIONS
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    renderHero();
    renderAbout();
    renderSkills();
    renderProjects();
    renderExperience();
    renderEducation();
    renderHackathons();
    renderContact();

    initNavbar();
    initScrollObserver();
});

// ============================================================
// NAVBAR: sticky scroll style + hamburger + active link
// ============================================================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('nav-hamburger');
    const navLinks = document.getElementById('nav-links');

    // Scrolled class for extra shadow
    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 30);
    });

    // Hamburger toggle
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('open');
            navLinks.classList.remove('open');
        });
    });
}

// ============================================================
// SCROLL OBSERVER: fade-in sections + active nav link
// ============================================================
function initScrollObserver() {
    const sections = document.querySelectorAll('.site-section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Fade-in on enter
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(s => fadeObserver.observe(s));

    // Active nav link via scroll position
    const activeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.id;
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' });

    sections.forEach(s => activeObserver.observe(s));
}
