import tensorflow as tf
import numpy as np
from PIL import Image
from tensorflow.keras.preprocessing import image

from utils.preprocess_image import preprocess_image


def predict_image(model, image_bytes, class_names):
    img = Image.open(image_bytes)  # Open image from byte stream
    img = img.resize((224, 224))  # Resize image to target size
    img_array = image.img_to_array(img)
    img_batch = np.expand_dims(img_array, axis=0)
    preprocessed_img_batch = preprocess_image(img_batch)

    # Set the input tensor for the model
    model.set_tensor(model.get_input_details()[0]['index'], preprocessed_img_batch)

    # Invoke the model to run the prediction
    model.invoke()

    # Extract the output tensor and post-process the results
    output_data = model.get_tensor(model.get_output_details()[0]['index'])
    class_labels = np.argmax(output_data, axis=1)

    return class_names[class_labels[0]]