function makePrediction() {
    const inputNumber = document.getElementById('inputNumber').value;
    const modelName = document.getElementById('modelSelect').value;
    
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `inputNumber=${inputNumber}&modelName=${modelName}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.error) {
            document.getElementById('result').innerText = `Erreur: ${data.error}`;
        } else {
            document.getElementById('result').innerText = `Prédiction = ${data.prediction}`;
        }
    })
    .catch(error => {
        document.getElementById('result').innerText = `Erreur: ${error}`;
    });
}

// Fonction pour mettre à jour le texte du bouton en fonction de l'état du thème
function updateThemeToggleButton() {
    const body = document.body;
    const themeToggle = document.getElementById("themeToggle");
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "Thème Clair";
    } else {
        themeToggle.textContent = "Thème Sombre";
    }
}

// Fonction pour activer le thème sombre
function enableDarkMode() {
    const body = document.body;
    body.classList.add("dark-mode");
    // Enregistrer le choix de l'utilisateur dans le localStorage
    localStorage.setItem("theme", "dark");
    updateThemeToggleButton();
}

// Fonction pour désactiver le thème sombre
function disableDarkMode() {
    const body = document.body;
    body.classList.remove("dark-mode");
    // Enregistrer le choix de l'utilisateur dans le localStorage
    localStorage.setItem("theme", "light");
    updateThemeToggleButton();
}

// Fonction pour activer/désactiver le thème sombre
function toggleDarkMode() {
    const body = document.body;
    // Vérifier si le thème sombre est déjà activé
    const isDarkMode = body.classList.contains("dark-mode");
    if (isDarkMode) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
}

// Vérifier si l'utilisateur a déjà choisi un thème et l'appliquer
document.addEventListener("DOMContentLoaded", function() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        enableDarkMode();
    }
});
