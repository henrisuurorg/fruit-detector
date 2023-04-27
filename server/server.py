from flask import Flask, request
import tensorflow as tf
from io import BytesIO

from utils.predict import predict_image  # Import the predict_image function
from utils.class_names import ripeness_class_names, detection_class_names  # Import the ripeness_class_names dictionary

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index_message():
    return 'Send me an image!'

@app.route('/inference', methods=['POST'])
def predict():
    # Load the first detection model from the file
    tflite_model_file = "models/detection.tflite"
    interpreter = tf.lite.Interpreter(model_path=tflite_model_file)

    # Allocate tensors for the first model
    interpreter.allocate_tensors()

    imagefile = request.files['imagefile']
    image_bytes = BytesIO(imagefile.read())  # Read image file as bytes

    # Make a prediction using the first model
    prediction_class = predict_image(interpreter, image_bytes, detection_class_names)

    # Attempt to load the second model based on the result from the first one
    try:
        tflite_model_file_ripeness = f"models/ripeness/{prediction_class}.tflite"
        interpreter_ripeness = tf.lite.Interpreter(model_path=tflite_model_file_ripeness)

        # Allocate tensors for the second model
        interpreter_ripeness.allocate_tensors()

        # Make a prediction using the second model
        prediction_class_names = ripeness_class_names.get(prediction_class)
        prediction_ripeness = predict_image(interpreter_ripeness, image_bytes, prediction_class_names)

        # Combine the results from both predictions
        result = {
            "fruit": prediction_class,
            "ripeness": prediction_ripeness
        }
    except ValueError:
        result = {
            "fruit": prediction_class,
            "ripeness": None
        }

    return result
