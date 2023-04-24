import { Camera } from "expo-camera"
import { useState, useRef } from "react"
import { View } from "react-native"
import DisplayPhoto from "./screens/DisplayPhoto"
import CameraScreen from "./screens/Camera"
import DisplayPermission from "./screens/RequestPermission"

export default function App() {
  const [permission, requestPermission] = Camera.useCameraPermissions()
  const [photo, setPhoto] = useState()
  let cameraRef = useRef()

  const takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false,
    }
    let newPhoto = await cameraRef.current.takePictureAsync(options)
    setPhoto(newPhoto)
  }

  if (!permission) {
    return <View />
  } else if (!permission.granted) {
    // Camera permissions are not granted yet
    return <DisplayPermission request={requestPermission} />
  } else if (!photo) {
    return <CameraScreen takePic={takePic} cameraRef={cameraRef} />
  } else {
    return (
      <DisplayPhoto photo={photo} discardPhoto={() => setPhoto(undefined)} />
    )
  }
}
