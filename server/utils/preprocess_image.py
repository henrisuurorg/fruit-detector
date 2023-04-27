import numpy as np

def preprocess_image(image):
    # Scale the pixel values to the range [-1, 1]
    image = (image - 127.5) / 127.5
    return image