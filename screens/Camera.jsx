import { Text, TouchableOpacity, View } from "react-native"
import { useRef, useState } from "react"
import { Camera, CameraType } from "expo-camera"
import styles from "../styles.js"

const DisplayCamera = ({ takePic, cameraRef }) => {
  const [camera, setCamera] = useState(CameraType.back)
  const toggleCameraType = () => {
    setCamera((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    )
  }

  return (
    <View style={styles.container}>
      <Camera type={camera} style={styles.camera} ref={cameraRef}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.capture_button} onPress={takePic}>
            <Text style={styles.text}>Capture</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.capture_button}
            onPress={toggleCameraType}
          >
            <Text style={styles.text}>Flip</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  )
}

export default DisplayCamera
