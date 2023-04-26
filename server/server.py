# import os
# import psutil
# import threading
# import time
from flask import Flask, request
import tensorflow as tf
import numpy as np
from io import BytesIO
from PIL import Image
from tensorflow.keras.preprocessing import image
from gunicorn.app.base import BaseApplication


class_names = ['apple','apricot','avocado','banana','bell pepper','black berry','black cherry','black currant','blueberry','cherry','clementine','cloudberry','cranberry','dragonfruit','eggplant','elderberry','gooseberry','kiwi','lemon','lime','lingonberry','mango','nectarine','olive','orange','papaya','pea','pear','pineapple','pomegranate','raspberry','strawberry','tomato','vanilla','watermelon','zucchini']

app = Flask(__name__)

@app.route('/', methods=['GET'])
def hello_world():
    return 'Send me an image!'

@app.route('/inference', methods=['POST'])
def predict():
    # Load the TFLite model from the file
    tflite_model_file = "optimized_model.tflite"
    interpreter = tf.lite.Interpreter(model_path=tflite_model_file)

    # Allocate tensors
    interpreter.allocate_tensors()

    # Get input and output details
    input_details = interpreter.get_input_details()
    output_details = interpreter.get_output_details()

    imagefile = request.files['imagefile']
    image_bytes = imagefile.read()  # Read image file as bytes

    img = Image.open(BytesIO(image_bytes))  # Open image from byte stream
    img = img.resize((224, 224))  # Resize image to target size
    img_array = image.img_to_array(img)
    img_batch = np.expand_dims(img_array, axis=0)
    preprocessed_img_batch = preprocess_image(img_batch)

    # Set the input tensor for the interpreter
    interpreter.set_tensor(input_details[0]['index'], preprocessed_img_batch)

    # Invoke the interpreter to run the prediction
    interpreter.invoke()

    # Extract the output tensor and post-process the results
    output_data = interpreter.get_tensor(output_details[0]['index'])
    class_labels = np.argmax(output_data, axis=1)

    return class_names[class_labels[0]]

def preprocess_image(image):
    # Scale the pixel values to the range [-1, 1]
    image = (image - 127.5) / 127.5
    return image

# def memory_monitor():
#     process = psutil.Process(os.getpid())
#     while True:
#         mem_info = process.memory_info()
#         print(f"Current memory usage: {mem_info.rss / (1024 * 1024)} MB")
#         time.sleep(5)  # Check memory usage every 5 seconds