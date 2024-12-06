let currentHero = 0;
const heroes = document.querySelectorAll('.hero1, .hero2, .hero3');

function changeHero() {
    heroes[currentHero].classList.remove('active');
    currentHero = (currentHero + 1) % heroes.length;
    heroes[currentHero].classList.add('active');
}

// Set interval for the slideshow (every 3 seconds)
setInterval(changeHero, 3000);
