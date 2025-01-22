// script.js

let currentSlide = 1;

// Show a specific slide
function showSlide(slideId) {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.add('hidden');
    });
    document.getElementById(slideId).classList.remove('hidden');
}

// Handle the Yes button click
function yesClicked() {
    showSlide('slideYes');
}

// Slide 6: Decorations
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

// Restart the sequence
function restart() {
    window.location.reload();
}

// Initialize by showing the first slide
document.addEventListener('DOMContentLoaded', () => {
    showSlide('slide1');
});
