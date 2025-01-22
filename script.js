// script.js
const canvas = document.getElementById('balloonsCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const hearts = [];

// Heart Object
class Heart {
    constructor(x, y, size, color, speed) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.speed = speed;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update() {
        this.y -= this.speed;
        if (this.y + this.size < 0) {
            this.y = canvas.height + this.size;
        }
    }
}

// Create multiple hearts
function createHearts() {
    for (let i = 0; i < 20; i++) {
        const size = Math.random() * 5 + 2;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const speed = Math.random() * 1 + 0.5;
        hearts.push(new Heart(x, y, size, '#ff69b4', speed));
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach((heart) => {
        heart.draw();
        heart.update();
    });
    requestAnimationFrame(animate);
}

createHearts();
animate();

// Button Logic
function yesClicked() {
    const messageBox = document.getElementById('messageBox');
    const buttons = document.getElementById('buttons');
    messageBox.innerHTML = `<p>Happy Birthday, Nabila! 🎉</p>`;
    buttons.style.display = 'none';
}

function noClicked() {
    const messageBox = document.getElementById('messageBox');
    messageBox.innerHTML = `<p>Oh no! Let me try again!</p>`;
}
