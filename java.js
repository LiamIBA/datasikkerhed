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
        0: { label: "Meget svag", color: "#f44336" },
        1: { label: "Svag", color: "#ff9800" },
        2: { label: "Middel", color: "#ffeb3b" },
        3: { label: "Stærk", color: "#4caf50" },
        4: { label: "Meget stærk", color: "#009688" }
    };
    let score = 0;
    if (password.length < 6) return strengths[0];
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (password.length >= 14) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^A-Za-z0-9]/)) score++;
    return strengths[Math.min(score, 4)];
}

function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const strengthDisplay = document.getElementById('strengthDisplay');
    const strength = getPasswordStrength(password);

    strengthDisplay.textContent = `Styrke: ${strength.label}`;
    strengthDisplay.style.backgroundColor = strength.color;
}

function getPasswordStrength(password) {
    const strengths = {
        0: { label: "Meget svag", description: "Dit password er meget svagt. Prøv at inkludere forskellige typer tegn og gøre det længere.", color: "#f44336" },
        1: { label: "Svag", description: "Dit password er svagt. Overvej at tilføje flere tal, store bogstaver eller symboler for at styrke det.", color: "#ff9800" },
        2: { label: "Middel", description: "Dit password er middel. Det er okay, men kan forbedres med flere komplekse tegn og en længere længde.", color: "#ffeb3b" },
        3: { label: "Stærk", description: "Godt gjort! Dit password er stærkt, men overvej altid at holde det opdateret og unikt for forskellige sites.", color: "#4caf50" },
        4: { label: "Meget stærk", description: "Fantastisk! Dit password er meget stærkt og sikkerhedsniveauet er højt.", color: "#009688" }
    };
    let score = 0;
    if (password.length < 6) return strengths[0];
    if (password.length >= 8) score++;
    if (password.length >= 12) score++;
    if (password.length >= 14) score++;
    if (password.match(/[A-Z]/)) score++;
    if (password.match(/[a-z]/)) score++;
    if (password.match(/[0-9]/)) score++;
    if (password.match(/[^A-Za-z0-9]/)) score++;
    return strengths[Math.min(score, 4)];
}

function checkPasswordStrength() {
    const password = document.getElementById('passwordInput').value;
    const strengthDisplay = document.getElementById('strengthDisplay');
    const strength = getPasswordStrength(password);

    strengthDisplay.innerHTML = `Styrke: ${strength.label} <br>${strength.description}`;
    strengthDisplay.style.backgroundColor = strength.color;
}
