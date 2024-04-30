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
    if (password.length >= 8) score += 1; // Tildele point for minimumslængden
    if (password.length >= 12) score += 1; // Yderligere point for længere passwords
    if (password.length >= 14) score += 1; // Maksimal point for længde

    // Tjek for store og små bogstaver, tal og symboler
    if (password.match(/[A-Z]/)) score += 1;
    if (password.match(/[a-z]/)) score += 1;
    if (password.match(/[0-9]/)) score += 1;
    if (password.match(/[^A-Za-z0-9]/)) score += 1;

    // Sikrer at passwordet ikke er et enkelt ord fra en ordbog eller et kendt navn
    if (!password.match(/^(?=.*\b[a-zA-Z]{4,}\b).*$/)) score += 1;

    return strengths[Math.min(score, 5)];
}

