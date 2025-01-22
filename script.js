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

// Handle the No button click
function noClicked() {
    showSlide('slideNo');
}

// Restart the sequence
function restart() {
    showSlide('slide1');
}

// Initialize by showing the first slide
document.addEventListener('DOMContentLoaded', () => {
    showSlide('slide1');
});
