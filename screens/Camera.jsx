import { Text, TouchableOpacity, View, Dimensions } from "react-native"
import { useState, useEffect } from "react"
import { Camera, CameraType } from "expo-camera"
import styles from "../styles.js"
import getAspectRatio from "../utils/getAspectRatio.js"
import findBestMatchingAspectRatio from "../utils/findBestMatchingAspectRatio.js"

const CameraScreen = ({ takePic, cameraRef }) => {
  const [camera, setCamera] = useState(CameraType.back)
  const [cameraRatio, setCameraRatio] = useState(null)
  const [isCameraReady, setIsCameraReady] = useState(false)

  const toggleCameraType = () => {
    setCamera((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    )
  }

  const onCameraReady = () => {
    setIsCameraReady(true)
  }

  useEffect(() => {
    const setBestMatchingRatio = async () => {
      const aspectRatio = getAspectRatio()

      if (cameraRef.current && isCameraReady) {
        const supportedRatios =
          await cameraRef.current.getSupportedRatiosAsync()
        const bestRatio = findBestMatchingAspectRatio(
          supportedRatios,
          aspectRatio
        )
        setCameraRatio(bestRatio)
      }
    }

    setBestMatchingRatio()
  }, [cameraRef, isCameraReady])

  return (
    <View style={styles.container}>
      <Camera
        type={camera}
        style={styles.camera}
        ref={cameraRef}
        ratio={cameraRatio}
        onCameraReady={onCameraReady}
      >
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

export default CameraScreen
