import { Camera, CameraType, FlashMode } from "expo-camera"
import * as ImagePicker from "expo-image-picker"
import { useState, useEffect, useRef } from "react"
import {
  Button,
  Text,
  TouchableOpacity,
  View,
  Image,
  Platform,
} from "react-native"
import {
  PinchGestureHandler,
  GestureHandlerRootView,
} from "react-native-gesture-handler"
import { useIsFocused } from "@react-navigation/native"
import getAspectRatio from "../../utils/getAspectRatio.js"
import findBestMatchingAspectRatio from "../../utils/findBestMatchingAspectRatio.js"
import CameraStyles from "./Camera.styles.js"
import flashOnIcon from "../../../assets/flashOnIcon.png"
import flashOffIcon from "../../../assets/flashOffIcon.png"
import galleryIcon from "../../../assets/galleryIcon.png"
import flipIcon from "../../../assets/flip_camera.png"

const CameraScreen = ({ navigation }) => {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [cameraRatio, setCameraRatio] = useState()
  const [isCameraReady, setIsCameraReady] = useState(false)
  const [flash, setFlash] = useState(FlashMode.off)
  const [showFlip, setShowFlip] = useState(false)
  const [camType, setCamType] = useState(CameraType.back)
  const [zoom, setZoom] = useState(0)
  const cameraRef = useRef()
  const isFocused = useIsFocused()

  const onPinchGestureEvent = (nativeEvent) => {
    const { scale } = nativeEvent.nativeEvent
    const velocity = nativeEvent.nativeEvent.velocity / 20

    const zoomInMultiplier = Platform.OS === "ios" ? 0.01 : 25
    const zoomOutMultiplier = Platform.OS === "ios" ? 0.02 : 75 // Adjust this value for Android

    let newZoom =
      velocity > 0
        ? zoom + scale * velocity * zoomInMultiplier
        : zoom - scale * Math.abs(velocity) * zoomOutMultiplier

    if (newZoom < 0) newZoom = 0
    else if (newZoom > 0.5) newZoom = 0.5

    setZoom(newZoom)
  }

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

  const flipCamera = () => {
    if (camType === CameraType.back) {
      setCamType(CameraType.front)
    } else {
      setCamType(CameraType.back)
    }
  }

  const enableFlip = () => {
    setShowFlip(!showFlip)
    setCamType(CameraType.front)
  }

  const disableFlip = () => {
    setShowFlip(!showFlip)
    if (camType != CameraType.back) {
      setCamType(CameraType.back)
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
      if (Platform.OS == "android") {
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
    <GestureHandlerRootView style={CameraStyles.container}>
      {isFocused && (
        <Camera
          style={CameraStyles.camera}
          ref={cameraRef}
          ratio={cameraRatio}
          onCameraReady={onCameraReady}
          flashMode={flash}
          zoom={zoom}
          type={camType}
        >
          <PinchGestureHandler onGestureEvent={onPinchGestureEvent}>
            <View style={CameraStyles.overlay}>
              <View style={CameraStyles.buttonContainer}>
                {showFlip ? (
                  <TouchableOpacity
                    style={CameraStyles.iconButton}
                    onPress={flipCamera}
                    onLongPress={disableFlip}
                  >
                    <Image source={flipIcon} style={CameraStyles.icon} />
                  </TouchableOpacity>
                ):(
                  <TouchableOpacity
                    style={CameraStyles.iconButton}
                    onPress={pickImage}
                    onLongPress={enableFlip}
                  >
                    <Image source={galleryIcon} style={CameraStyles.icon} />
                  </TouchableOpacity>
                )}

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
            </View>
          </PinchGestureHandler>
        </Camera>
      )}
    </GestureHandlerRootView>
  )
}

export default CameraScreen
