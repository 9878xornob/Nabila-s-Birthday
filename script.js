// script.js

// Event listeners for the buttons
function yesClicked() {
    const messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = `
        <div class="star">🌟</div>
        <p id="message">Yay! I'm so glad you're excited, Nabila! 🎉</p>
    `;
    removeButtons();
    releaseBalloons();
}

function noClicked() {
    const messageBox = document.getElementById("messageBox");
    messageBox.innerHTML = `
        <div class="star">💔</div>
        <p id="message">Oh no! But it's still your special day, Nabila! 🥳</p>
    `;
    removeButtons();
    releaseBalloons();
}

// Remove buttons after clicking
function removeButtons() {
    const buttons = document.getElementById("buttons");
    buttons.style.display = "none";
}

// Balloons animation
function releaseBalloons() {
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
        for (let i = 0; i < balloons.length; i++) {
            const balloon = balloons[i];
            balloon.y -= balloon.speed;
            ctx.beginPath();
            ctx.arc(balloon.x, balloon.y, balloon.size, 0, Math.PI * 2);
            ctx.fillStyle = balloon.color;
            ctx.fill();

            // Remove balloons that move off-screen
            if (balloon.y + balloon.size < 0) {
                balloons.splice(i, 1);
                i--;
            }
        }
        requestAnimationFrame(updateBalloons);
    }

    setInterval(createBalloon, 300); // Create a new balloon every 300ms
    updateBalloons();
}
