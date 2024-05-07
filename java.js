document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    setInterval(showNextSlide, 5000);
});

function openPasswordPopup() {
    document.getElementById('passwordPopup').style.right = '0'; 
}

function closePasswordPopup() {
    document.getElementById('passwordPopup').style.right = '-400px';
}

function getPasswordStrength(password) {
    const strengths = {
        1: { label: "Meget svag", description: "Dit password er meget svagt og let at gætte. Forøg sikkerheden ved at blande store og små bogstaver, tilføje tal samt specialtegn, og gør det længere end 14 tegn.", color: "#f44336" },
        2: { label: "Svag", description: "Dit password er svagt og kunne være mere sikkert. Prøv at styrke det ved at inkludere en blanding af store bogstaver, tal og symboler for at gøre det sværere at gætte.", color: "#ff9800" },
        4: { label: "Middel", description: "Dit password er middel, men det kan forbedres. Tilføj flere komplekse tegn, såsom symboler og blandede bogstavstørrelser, og overvej at øge længden.", color: "#ffeb3b" },
        5: { label: "Stærk", description: "Godt arbejde! Dit password er stærkt. Husk at et ideelt stærkt password indeholder mindst 14 tegn, inkluderer både store og små bogstaver samt tal og symboler..", color: "#4caf50" },
        6: { label: "Meget stærk", description: "Fantastisk! Dit password er meget stærkt og godt sikret. Vær sikker på at det har en blanding af store og små bogstaver, tal, specialtegn, og er på mindst 14 tegn.", color: "#009688" }
    };

    let score = 0;

    if (password.length >= 6) score++;
    if (password.length >= 8) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^A-Za-z0-9]/)) score++;
    if (password.match(/[\.\,\?\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\<\>\|\\\//]/)) score++;

    // Specifikke krav til at blive klassificeret som 'stærk'
    if (password.length >= 10 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/)) {
        score = Math.max(score, 5); // Sætter scoren til 5 hvis alle 'stærk' betingelser er mødt
    }

    // Tjek for 'meget stærkt' krav
    if (password.length >= 14 && password.match(/[A-Z]/) && password.match(/[a-z]/) && password.match(/[0-9]/) && password.match(/[\.\,\?\!\@\#\$\%\^\&\*\(\)\-\=\_\+\[\]\{\}\;\:\'\"\<\>\|\\\//]/)) {
        score = Math.max(score, 6); // Sætter scoren til 6 hvis alle 'meget stærk' betingelser er mødt
    }

    return strengths[Math.min(score, 6)];
}

function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const strengthDisplay = document.getElementById('strengthDisplay');
    const strength = getPasswordStrength(password);

    strengthDisplay.textContent = `Styrke: ${strength.label}`;
    strengthDisplay.style.backgroundColor = strength.color;
}