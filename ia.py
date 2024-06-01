import numpy as np
from keras import Sequential, layers

# Création du modèle
model = Sequential()

model.add(layers.Dense(units=3, input_shape=[1]))
model.add(layers.Dense(units=64))
model.add(layers.Dense(units=64))
model.add(layers.Dense(units=64))
model.add(layers.Dense(units=1))

# Données d'entraînement
entree = np.array([1, 2, 3, 4, 5])
sortie = np.array([2, 4, 6, 8, 10])

# Compilation du modèle
model.compile(loss='mean_squared_error', optimizer='adam')

# Entraînement du modèle
model.fit(x=entree, y=sortie, epochs=100000)

# Sauvegarde du modèle
model.save("Wedone_DoublePredictorAI5.keras")

# Boucle de prédiction
while True:
    x = int(input('Nombre : '))
    print('Prédiction = ' + str(model.predict(np.array([x]))))
