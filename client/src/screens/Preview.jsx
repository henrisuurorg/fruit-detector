import {
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Dimensions,
} from "react-native"
import React, { useState } from "react"
import styles from "../../styles.js"
import MovableSquare from "../components/MovableSquare.jsx"

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
        styles.container,
        { justifyContent: "center", alignItems: "center" },
      ]}
    >
      <Image
        style={styles.preview}
        source={{ uri: "data:image/jpg;base64," + route.params.photo.base64 }}
      />

      <View style={styles.navBar}>
        <TouchableOpacity
          style={styles.button_discard}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.text}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button_identify}
          onPress={() => console.debug(position)}
        >
          <Text style={styles.text}>Identify</Text>
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
