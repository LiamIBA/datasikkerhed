function openPasswordPopup() {
    document.getElementById('passwordPopup').style.right = '0'; // Slide in from the right
}

function closePasswordPopup() {
    document.getElementById('passwordPopup').style.right = '-400px'; // Slide out to the right
}

function checkPasswordStrength() {
    const strengthDisplay = document.getElementById('strengthDisplay');
    const password = document.getElementById('passwordInput').value;
    let strength = getPasswordStrength(password);

    strengthDisplay.textContent = `Styrke: ${strength.label}`;
    strengthDisplay.style.backgroundColor = strength.color;
}

function getPasswordStrength(password) {
    const strengths = {
        0: { label: "Meget svag", color: "#f44336" },
        1: { label: "Svag", color: "#ff9800" },
        2: { label: "Middel", color: "#ffeb3b" },
        3: { label: "Stærk", color: "#4caf50" },
        4: { label: "Meget stærk", color: "#009688" }
    };
    let score = 0;

    // Opdateret logik for minimum længde
    if (password.length < 6) return strengths[0]; // Returner "Meget svag" hvis under 6 tegn
    if (password.length >= 8) score += 1;
    if (password.length >= 12) score += 1;
    if (password.length >= 14) score += 1;

    // Tjek for store og små bogstaver, tal og symboler
    if (password.match(/[A-Z]/)) score += 1;
    if (password.match(/[a-z]/)) score += 1;
    if (password.match(/[0-9]/)) score += 1;
    if (password.match(/[^A-Za-z0-9]/)) score += 1;

    // Sikrer at passwordet ikke er et enkelt ord fra en ordbog eller et kendt navn
    if (!password.match(/^(?=.*\b[a-zA-Z]{4,}\b).*$/)) score += 1;

    return strengths[Math.min(score, 4)];
}

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showNextSlide() {
        // Fjerner 'active' klassen fra det nuværende slide
        slides[currentSlide].classList.remove('active');

        // Opdaterer 'currentSlide' til næste billede i arrayet
        currentSlide = (currentSlide + 1) % slides.length;

        // Tilføjer 'active' klassen til det nye nuværende slide
        slides[currentSlide].classList.add('active');
    }

    // Initialiserer det første slide
    slides[currentSlide].classList.add('active');

    // Sætter intervallet til at skifte slide hver 3 sekunder (3000 millisekunder)
    setInterval(showNextSlide, 3000);
});
