//========================================= QUESTION FORM =========================================//
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.question-form form');
    const feedback = document.createElement('div');
    feedback.id = 'feedback'; 
    form.appendChild(feedback);

    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const question = document.getElementById('question').value.trim();

        if (name === '' || email === '' || question === '') {
            feedback.textContent = 'Please fill in all fields.';
            feedback.style.color = 'red';
            event.preventDefault(); 
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            feedback.textContent = 'Please enter a valid email address.';
            feedback.style.color = 'red';
            event.preventDefault(); 
            return;
        }
    });
});

//========================================= HAMBURGER =========================================//
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.getElementById('desktop-tablet-nav');

    if (hamburger && navMenu) { 
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
});

//========================================= MUSIC =========================================//
document.addEventListener('DOMContentLoaded', function() {
    const circleTotoro = document.getElementById('circle-totoro');
    const music = document.getElementById('music');

    if (localStorage.getItem('musicPlaying') === 'true') {
        music.play(); 
    }

    circleTotoro.addEventListener('click', function() {
        if (music.paused) {
            music.play(); 
            localStorage.setItem('musicPlaying', 'true'); 
        } else {
            music.pause(); 
            localStorage.setItem('musicPlaying', 'false');
        }
    });
});

    

