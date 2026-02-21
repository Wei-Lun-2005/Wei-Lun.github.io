const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

// Mouse configuration
let mouse = {
    x: undefined,
    y: undefined,
    radius: 180 // Repulsion radius
};

window.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

// Avoid lingering repulsion when mouse leaves the window
window.addEventListener('mouseout', function () {
    mouse.x = undefined;
    mouse.y = undefined;
});

class Particle {
    constructor(x, y, vx, vy, size, color) {
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
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
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) this.vx = -this.vx;
        if (this.y > canvas.height || this.y < 0) this.vy = -this.vy;

        // Anti-Gravity / Repulsion logic
        if (mouse.x != undefined && mouse.y != undefined) {
            let dx = mouse.x - this.x;
            let dy = mouse.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouse.radius) {
                const forceDirectionX = dx / distance;
                const forceDirectionY = dy / distance;

                // The closer the mouse, the stronger the push
                const force = (mouse.radius - distance) / mouse.radius;
                const pushFactor = 1.5; // Reduced from 4

                // Move particle away from mouse
                this.x -= forceDirectionX * force * pushFactor;
                this.y -= forceDirectionY * force * pushFactor;
            }
        }

        // Apply normal velocity
        this.x += this.vx;
        this.y += this.vy;
        this.draw();
    }
}

function init() {
    particlesArray = [];
    // Dynamic particle count based on screen size (keeps it looking good on any monitor)
    let numberOfParticles = (canvas.height * canvas.width) / 10000;

    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 2) + 0.5;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2) - (size * 2)) + size * 2);
        let vx = (Math.random() * 0.5) - 0.25; // Slower velocity
        let vy = (Math.random() * 0.5) - 0.25;

        // Subtle blue-ish white tint for premium tech feel
        let color = 'rgba(200, 220, 255, 0.8)';

        particlesArray.push(new Particle(x, y, vx, vy, size, color));
    }
}

// Draw connection lines between nearby particles
function connect() {
    for (let a = 0; a < particlesArray.length; a++) {
        // Optimization: Start from upcoming points, avoiding double checks
        for (let b = a + 1; b < particlesArray.length; b++) {
            let dx = particlesArray[a].x - particlesArray[b].x;
            let dy = particlesArray[a].y - particlesArray[b].y;
            let distance = dx * dx + dy * dy;

            // Connect if squared distance is less than 12000 
            if (distance < 12000) {
                let opacityValue = 1 - (distance / 12000);
                // Same subtle blue-ish white tint for lines
                ctx.strokeStyle = `rgba(200, 220, 255, ${opacityValue * 0.25})`;
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

    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
    }
    connect();
}

window.addEventListener('resize', function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init(); // Reinitialize to adjust particle density for new screen size
});

// Start
init();
animate();
