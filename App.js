import { Camera, CameraType } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Dimensions, Platform, SafeAreaView, Image} from 'react-native';
import { shareAsync } from 'expo-sharing';

export default function App() {
  let cameraRef = useRef();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState();
  var isVisible = false;
  var dummyText = "Null"


  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  // the camera must be loaded in order to access the supported ratios
  const setCameraReady = async() => {
    if (!isRatioSet) {
      await prepareRatio();
    }
  };

  function toggleCameraType() {
    setCamera(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }
  function toggleisVisible() {
    console.debug("Photostring: " + photo.base64)
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };
    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    return (
      <SafeAreaView style={styles.container}>
        <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
        <View style={styles.navBar}>
          <TouchableOpacity style={styles.button_discard} onPress={() => setPhoto(undefined)}>
            <Text style={styles.text}>Discard</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_identify} onPress={() => toggleisVisible()}>
            <Text style={styles.text}>Identify</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
        <Camera
          style={styles.camera}
          ref={cameraRef}
        >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.capture_button} onPress={takePic}>
            <Text style={styles.text}>Capture</Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  navBar: {
    flex: 2,
    flexDirection: 'row',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 15,
    left: 0,
    backgroundColor: 'transparent',
    opacity: 1
  },
  button_identify: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: "#327a3d",
    backgroundColor: "#3cc946",
    borderBottomWidth: 6,
    borderLeftWidth: 4,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  button_discard: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: "#7a3232",
    backgroundColor: "#b52d2d",
    borderBottomWidth: 6,
    borderRightWidth: 4,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },

  capture_button: {
    flex: 1,
    paddingVertical: 15,
    backgroundColor: "#66ccc2",
    borderRadius: 10,
    borderColor: "#658f8b",
    borderBottomWidth: 6,
    borderRightWidth: 4,
    borderLeftWidth: 4,
    alignSelf: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  }
});
