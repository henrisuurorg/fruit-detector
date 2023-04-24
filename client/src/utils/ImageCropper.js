import { SaveFormat, manipulateAsync } from 'expo-image-manipulator';
import { Dimensions } from 'react-native';


const ImageCropper = async ( photo, x, y, length ) => {
    // Make a local copy of the image to not destroy the original
    const image = photo;

    // Image is captured at a higher quality than the screen allows.
    // To figure out the relative height and width, we must calculate the ratio between the two and multiply by it.
    const { width, height } = Dimensions.get("window")  // Dimensions of the screen
    const imgHeight = image.height;                     // Dimensions of the image
    const imgWidth = image.width;                       

    const ratioW = imgWidth / width;                    // Ratio of the Width
    const ratioH = imgHeight / height                   // Ratio of the Height
    const avgRatio = (ratioH + ratioW) / 2              // Average ratio to figure out the square length scaler
    
    let relativeX = Math.round(x - (length / 2)) * ratioW;
    let relativeY = Math.round(y - (length / 2)) * ratioH;
    let relativeLength = length * avgRatio;
    
    
    // The actual cropping of the image
    const { uri: CropResult } = await manipulateAsync(
        image.uri,
        [{crop: {height: relativeLength, originX: relativeX, originY: relativeY,  width: relativeLength}}],
        {base64: true}
    )
    return CropResult;
}

export default ImageCropper