from flask import Flask, request
from tensorflow import keras
import tensorflow as tf
import numpy as np
from io import BytesIO
from PIL import Image
from tensorflow.keras.preprocessing import image


class_names = ['apple',
 'apricot',
 'avocado',
 'banana',
 'bell pepper',
 'black berry',
 'black cherry',
 'black currant',
 'blueberry',
 'cherry',
 'clementine',
 'cloudberry',
 'cranberry',
 'dragonfruit',
 'eggplant',
 'elderberry',
 'gooseberry',
 'kiwi',
 'lemon',
 'lime',
 'lingonberry',
 'mango',
 'nectarine',
 'olive',
 'orange',
 'papaya',
 'pea',
 'pear',
 'pineapple',
 'pomegranate',
 'raspberry',
 'strawberry',
 'tomato',
 'vanilla',
 'watermelon',
 'zucchini']

app = Flask(__name__)
model = keras.models.load_model('./model/')


@app.route('/', methods=['GET'])
def hello_world():
    return 'Send me an image!'

@app.route('/', methods=['POST'])
def predict():
    imagefile = request.files['imagefile']
    image_bytes = imagefile.read()  # Read image file as bytes

    img = Image.open(BytesIO(image_bytes))  # Open image from byte stream
    img = img.resize((224, 224))  # Resize image to target size
    img_array = image.img_to_array(img)

    img_batch = np.expand_dims(img_array, axis=0)

    # predict
    predictions = model.predict(img_batch)

    # Convert predictions to class labels
    class_labels = np.argmax(predictions, axis=1)


    return class_names[class_labels[0]]

if __name__ == '__main__':
    app.run(port=3000, debug=True)