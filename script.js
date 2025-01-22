// script.js

let currentSlide = 1;

// Show a specific slide
function showSlide(slideId) {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.add('hidden');
    });
    document.getElementById(slideId).classList.remove('hidden');
}

// Slide 6: Floating particles and balloons stuck at the bottom
function showDecorations() {
    const canvas = document.getElementById("balloonsBottomCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const balloons = [];
    const colors = ["#ff6f61", "#6fc3df", "#ffd700", "#98fb98", "#ff69b4"];

    function createBalloon() {
        const x = Math.random() * canvas.width;
        const y = canvas.height - 50;
        const size = Math.random() * 20 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        balloons.push({ x, y, size, color });
    }

    function drawBalloons() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let balloon of balloons) {
            ctx.beginPath();
            ctx.arc(balloon.x, balloon.y, balloon.size, 0, Math.PI * 2);
            ctx.fillStyle = balloon.color;
            ctx.fill();
        }
        requestAnimationFrame(drawBalloons);
    }

    for (let i = 0; i < 10; i++) {
        createBalloon();
    }
    drawBalloons();
}

// Slide 7: Balloons released when clicked
function releaseAllBalloons() {
    const canvas = document.getElementById("balloonsCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const balloons = [];
    const colors = ["#ff6f61", "#6fc3df", "#ffd700", "#98fb98", "#ff69b4"];

    function createBalloon() {
        const x = Math.random() * canvas.width;
        const y = canvas.height + 50;
        const size = Math.random() * 20 + 20;
        const color = colors[Math.floor(Math.random() * colors.length)];
        const speed = Math.random() * 2 + 1;
        balloons.push({ x, y, size, color, speed });
    }

    function updateBalloons() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let balloon of balloons) {
            balloon.y -= balloon.speed;
            ctx.beginPath();
            ctx.arc(balloon.x, balloon.y, balloon.size, 0, Math.PI * 2);
            ctx.fillStyle = balloon.color;
            ctx.fill();
        }
        requestAnimationFrame(updateBalloons);
    }

    for (let i = 0; i < 20; i++) {
        createBalloon();
    }
    updateBalloons();
}

// Slide 8: Splitting the cake
function splitCake() {
    const cake = document.getElementById("cake");
    cake.classList.add("split-cake");
    cake.innerHTML = `
        <div style="width: 48%; height: 100%; background: #f5a623; border-radius: 10px;"></div>
        <div style="width: 48%; height: 100%; background: #f5a623; border-radius: 10px;"></div>
    `;
    setTimeout(() => showSlide('slide9'), 2000);
}

// Slide 9: Final heartfelt message
function showFinalMessage() {
    const messageElement = document.getElementById("finalMessage");
    messageElement.textContent = `
        Dear Nabila, you are someone who cares deeply and supports me always. 
        I’m so grateful for you and this small surprise is just a token of my love and appreciation. 💖
    `;
}

// Restart the sequence
function restart() {
    window.location.reload();
}
