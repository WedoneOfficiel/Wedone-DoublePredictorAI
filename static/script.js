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
