import {
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native"
import React, { useState } from "react"
import PreviewStyles from "./Preview.styles"
import MovableSquare from "../../components/MovableSquare/MovableSquare.jsx"
import ImageCropper from "../../utils/ImageCropper.js"
import uploadImage from "../../utils/uploadImage"

import confirmButton from "../../../assets/preview_ok_button.png"
import returnButton from "../../../assets/preview_return_button.png"

const window_width = Dimensions.get("screen").width
const window_height = Dimensions.get("screen").height

const startX = window_width / 2
const startY = window_height / 2
const initialLength = 200

const Preview = ({ navigation, route }) => {
  const [position, setPosition] = useState({ x: startX, y: startY })
  const [squareLength, setLength] = useState(initialLength)
  const [buttonDisabled, setButtonDisabled] = useState(false)


  const cropImage = async () => {
    //crop the image and send to the server and then navigate to the result screen

    // Disable the button
    setButtonDisabled(true)

    // Crop the image
    let newPhoto = await ImageCropper(
      (photo = route.params.photo),
      (x = position.x),
      (y = position.y),
      (length = squareLength)
    )

    // Upload to server
    uploadImage(newPhoto)
      .then((fruit) => {
        navigation.navigate("Results", {
          navigation: this.navigation,
          fruit: fruit,
          image: newPhoto,
        })
        setButtonDisabled(false)
      })
      .catch((error) => {
        console.debug(error)
      })
  }
  return (
    <View style={PreviewStyles.container}>
      <Image
        style={PreviewStyles.preview}
        source={{ uri: "data:image/jpg;base64," + route.params.photo.base64 }}
      />
      <View style={PreviewStyles.overlay}/>
      <View style={PreviewStyles.buttonContainer}>
            <TouchableOpacity
              id="Return Button"
              style={PreviewStyles.iconButton}
              onPress={() => navigation.navigate("Camera")}
            >
              <Image source={returnButton} style={PreviewStyles.icon} />
            </TouchableOpacity>

            <TouchableOpacity
              id="Confirm Button"
              style={PreviewStyles.iconButton}
              onPress={cropImage}
              disabled={buttonDisabled}
            > 
              {buttonDisabled ? 
                (<Image source={confirmButton} style={[PreviewStyles.icon, {opacity: 0.35}]} />)
                : 
                (<Image source={confirmButton} style={PreviewStyles.icon} />)
              }
              
            </TouchableOpacity>
      </View>
      <MovableSquare
        position={position}
        setPosition={setPosition}
        squareLength={initialLength}
        setSquareLength={setLength}
        photo={route.params.photo}
      />
      {buttonDisabled ? 
        (
        <View style={[PreviewStyles.loadingContainer, {top: (position.y - (squareLength / 2)), left: position.x - (squareLength / 2), width: squareLength, height: squareLength}]}>
            <ActivityIndicator size="large" color="#ffffff" style={PreviewStyles.loadingIcon} scale={5} />
        </View>
        ): null
      }
    </View>
  )
}
export default Preview
