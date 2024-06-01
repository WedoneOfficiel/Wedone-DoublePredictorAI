from flask import Flask, request, jsonify, render_template
from keras.models import load_model
import numpy as np

app = Flask(__name__)

# Fonction pour charger un modèle
def load_model_by_name(model_name):
    model_path = f'model/{model_name}.keras'
    return load_model(model_path)

# Modèle par défaut
model_name = 'Wedone_DoublePredictorAI2'
model = load_model_by_name(model_name)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        model_name = request.form['modelName']
        model = load_model_by_name(model_name)
        x = float(request.form['inputNumber'])
        prediction = model.predict(np.array([[x]]))[0][0]
        return jsonify({'prediction': float(prediction)})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
