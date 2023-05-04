import { manipulateAsync } from 'expo-image-manipulator';
import { Dimensions } from 'react-native';


const ImageCropper = async ( photo, x, y, length ) => {
    // Make a local copy of the image to not destroy the original
    const image = photo;

    // Image is captured at a higher quality than the screen allows.
    // To figure out the relative height and width, we must calculate the ratio between the two and multiply by it.
    const { width, height } = Dimensions.get("screen")              // Dimensions of the screen
    const imgHeight = image.height;                                 // Dimensions of the image
    const imgWidth = image.width;                       

    const ratioW = parseFloat((imgWidth / width).toFixed(5));       // Ratio of the Width
    const ratioH = parseFloat((imgHeight / height).toFixed(5));     // Ratio of the Height
    const avgRatio = (ratioH + ratioW) / 2                          // Average ratio to figure out the square length scaler
    
    // Compute relative coordinates on the image from the screen coordinates
    let relativeX = (x  * ratioW)
    let relativeY = (y * ratioH)
    let relativeLength = length * avgRatio;
    let relativeHeight = relativeLength
    let relativeWidth = relativeLength
    
    relativeX = relativeX - (relativeLength / 2)
    relativeY = relativeY - (relativeLength / 2)

    // Check that the cropped area is within the image boundry
    if (relativeY < 0) {relativeY = 0}
    if (relativeX < 0) {relativeX = 0}
    if (relativeX + relativeWidth > imgWidth) {relativeWidth = relativeWidth - ((relativeWidth + relativeX) - imgWidth)}
    if (relativeY + relativeHeight > imgHeight) {relativeHeight = relativeHeight - ((relativeHeight + relativeY) - imgHeight)}


    // The actual cropping of the image
    const { uri: CropResult } = await manipulateAsync(
        image.uri,
        [
            {crop: {originX: relativeX, originY: relativeY, height: relativeHeight, width: relativeWidth}},
            {resize: {height: 224, width: 224}}
        ],
        {base64: true}
    )
    return CropResult;
}

export default ImageCropper