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
    percentage = f"{round(output_data[0][class_labels[0]] * 100, 2)}%"
    prediction = {
        "class": class_names[class_labels[0]],
        "confidence": percentage
    }
    # List all other possible options
    thresh = 0.05
    indicies = []
    # Get all the indecies from the output_data that are above the threshhold value.
    for i in range(len(output_data[0])):
        if (output_data[0][i] > thresh):
            if (i != class_labels[0]):
                indicies.append(i)
    
    # Add all the alternative results to a list
    alternatives = []
    for i in range(len(indicies)):
        percentage = f"{round(output_data[0][indicies[i]] * 100, 2)}%"
        alternatives.append({
            "class": class_names[indicies[i]],
            "confidence": percentage
        })
    
    # Return the result, 'prediction' contains the primary result and 'alternatives' contains everything else.
    result = {
        "prediction": prediction,
        "alternatives": alternatives
    }
    return result