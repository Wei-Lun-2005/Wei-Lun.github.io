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

let cols = 0;
let rows = 0;
const gridSpacing = 80; // Size of the grid cells

class Particle {
    constructor(x, y, size, color) {
        this.baseX = x;
        this.baseY = y;
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update() {
        let dx = mouse.x - this.baseX;
        let dy = mouse.y - this.baseY;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (mouse.x !== undefined && distance < mouse.radius && distance > 0.1) {
            let force = (mouse.radius - distance) / mouse.radius;
            let pushDist = force * 80;
            
            let targetX = this.baseX - (dx / distance) * pushDist;
            let targetY = this.baseY - (dy / distance) * pushDist;
            
            this.x += (targetX - this.x) * 0.15;
            this.y += (targetY - this.y) * 0.15;
        } else {
            this.x += (this.baseX - this.x) * 0.05;
            this.y += (this.baseY - this.y) * 0.05;
        }
        this.draw();
    }
}

function init() {
    particlesArray = [];
    cols = Math.floor(canvas.width / gridSpacing) + 2;
    rows = Math.floor(canvas.height / gridSpacing) + 2;
    
    const offsetX = (canvas.width - (cols - 1) * gridSpacing) / 2;
    const offsetY = (canvas.height - (rows - 1) * gridSpacing) / 2;

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            const x = i * gridSpacing + offsetX;
            const y = j * gridSpacing + offsetY;
            particlesArray.push(new Particle(
                x, y, 1.5, 'rgba(200, 220, 255, 0.8)'
            ));
        }
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    particlesArray.forEach(p => p.update());
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
