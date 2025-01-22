function nextSlide(answer) {
    document.getElementById('slide1').classList.add('hidden');
    document.getElementById('slide2').classList.add('hidden');
    document.getElementById('slide3').classList.add('hidden');
    document.getElementById('noSlide').classList.add('hidden');
    
    if (answer) {
        document.getElementById('slide3').classList.remove('hidden');
    } else {
        document.getElementById('noSlide').classList.remove('hidden');
    }
}

function showParty() {
    document.getElementById('slide3').classList.add('hidden');
    document.getElementById('party').classList.remove('hidden');
}

function flyBalloons() {
    document.querySelector('.balloons').style.animation = 'flyUp 2s ease-out forwards';
}

function splitCake() {
    document.querySelector('.cake').style.transform = 'translateX(-50px)';
}
