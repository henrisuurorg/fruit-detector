import { Camera, CameraType, FlashMode } from "expo-camera"
import * as ImagePicker from "expo-image-picker"
import { useState, useEffect, useRef } from "react"
import { Button, Text, TouchableOpacity, View, Image } from "react-native"
import { useIsFocused } from "@react-navigation/native"
import getAspectRatio from "../../utils/getAspectRatio.js"
import findBestMatchingAspectRatio from "../../utils/findBestMatchingAspectRatio.js"
import CameraStyles from "./Camera.styles.js"
import flashOnIcon from "../../../assets/flashOnIcon.png"
import flashOffIcon from "../../../assets/flashOffIcon.png"
import galleryIcon from "../../../assets/galleryIcon.png"

const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [cameraRatio, setCameraRatio] = useState()
  const [isCameraReady, setIsCameraReady] = useState(false)
  const [flash, setFlash] = useState(FlashMode.off)

  const cameraRef = useRef()
  const isFocused = useIsFocused()

  const onCameraReady = () => {
    setIsCameraReady(true)
  }

  const toggleFlash = () => {
    if (flash === FlashMode.off) {
      setFlash(FlashMode.on)
    } else {
      setFlash(FlashMode.off)
    }
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      base64: true,
      quality: 1,
    })

    if (!result.canceled) {
      navigation.navigate("Preview", {
        navigation: this.navigation,
        photo: result.assets[0],
      })
    }
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

  if (!permission) {
    // Camera permissions are still loading
    return <View />
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={CameraStyles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    )
  }

  const takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    }
    let newPhoto = await cameraRef.current.takePictureAsync(options)
    navigation.navigate("Preview", {
      navigation: this.navigation,
      photo: newPhoto,
    })
  }

  return (
    <View style={CameraStyles.container}>
      {isFocused && (
        <Camera
          style={CameraStyles.camera}
          ref={cameraRef}
          ratio={cameraRatio}
          onCameraReady={onCameraReady}
          flashMode={flash}
        >
          <View style={CameraStyles.buttonContainer}>
            <TouchableOpacity
              style={CameraStyles.iconButton}
              onPress={pickImage}
            >
              <Image source={galleryIcon} style={CameraStyles.icon} />
            </TouchableOpacity>

            <View style={CameraStyles.captureButtonWrapper}>
              <TouchableOpacity
                onPress={takePic}
                style={CameraStyles.captureButton}
              ></TouchableOpacity>
            </View>

            <TouchableOpacity
              style={CameraStyles.iconButton}
              onPress={toggleFlash}
            >
              {flash === FlashMode.off ? (
                <Image source={flashOffIcon} style={CameraStyles.icon} />
              ) : (
                <Image source={flashOnIcon} style={CameraStyles.icon} />
              )}
            </TouchableOpacity>
          </View>
        </Camera>
      )}
    </View>
  )
}

export default CameraScreen
