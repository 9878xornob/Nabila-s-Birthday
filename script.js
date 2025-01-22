// Select elements
const messageBox = document.getElementById("messageBox");
const buttons = document.getElementById("buttons");
const balloonsCanvas = document.getElementById("balloonsCanvas");
const ctx = balloonsCanvas.getContext("2d");

// Adjust canvas size to the full window
function resizeCanvas() {
    balloonsCanvas.width = window.innerWidth;
    balloonsCanvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Balloons data
const balloons = [];
const colors = ["#FF6F61", "#6B5B95", "#88B04B", "#F7CAC9", "#92A8D1", "#F4E04D"];

function createBalloon() {
    return {
        x: Math.random() * balloonsCanvas.width,
        y: balloonsCanvas.height + Math.random() * 100,
        size: Math.random() * 30 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 2 + 1,
    };
}

// Add balloons
for (let i = 0; i < 50; i++) {
    balloons.push(createBalloon());
}

// Draw balloons on the canvas
function drawBalloons() {
    ctx.clearRect(0, 0, balloonsCanvas.width, balloonsCanvas.height);
    balloons.forEach((balloon, index) => {
        ctx.beginPath();
        ctx.arc(balloon.x, balloon.y, balloon.size, 0, Math.PI * 2);
        ctx.fillStyle = balloon.color;
        ctx.fill();
        balloon.y -= balloon.speed;

        // Respawn balloon when it goes off-screen
        if (balloon.y + balloon.size < 0) {
            balloons[index] = createBalloon();
        }
    });
    requestAnimationFrame(drawBalloons);
}
drawBalloons();

// Function when "Yes!" button is clicked
function yesClicked() {
    messageBox.innerHTML = `
        <div class="star">🎉</div>
        <p class="special-message">Yay! We knew you’d say yes! 🎂✨</p>
    `;
    buttons.style.display = "none"; // Hide buttons
}

// Function when "No" button is clicked
function noClicked() {
    messageBox.innerHTML = `
        <div class="star">😅</div>
        <p class="special-message">No? Are you sure? 🥺 Well, we still love you! ❤️</p>
    `;
    buttons.style.display = "none"; // Hide buttons
}
