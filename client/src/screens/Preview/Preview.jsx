import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native"
import React, { useState } from "react"
import PreviewStyles from "./Preview.styles"
import MovableSquare from "../../components/MovableSquare/MovableSquare.jsx"

const window_width = Dimensions.get("window").width
const window_height = Dimensions.get("window").height

const startX = window_width / 2
const startY = window_height / 2

const Preview = ({ navigation, route }) => {
  const [position, setPosition] = useState({ x: startX, y: startY })
  const [squareLength, setLength] = useState({ length: 200 })
  return (
    <SafeAreaView
      style={[
        PreviewStyles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Image
        style={PreviewStyles.preview}
        source={{ uri: "data:image/jpg;base64," + route.params.photo.base64 }}
      />

      <View style={PreviewStyles.navBar}>
        <TouchableOpacity
          style={PreviewStyles.button_discard}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={PreviewStyles.text}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={PreviewStyles.button_identify}
          onPress={() => console.debug(position)}
        >
          <Text style={PreviewStyles.text}>Identify</Text>
        </TouchableOpacity>
      </View>
      <MovableSquare
        position={position}
        setPosition={setPosition}
        squareLength={squareLength.length}
        setSquareLength={setLength}
      />
    </SafeAreaView>
  )
}
export default Preview
