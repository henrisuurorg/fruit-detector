import { StyleSheet } from "react-native"

const CameraStyles = StyleSheet.create({
  iconButton: {
    width: 35,
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 30,
    backgroundColor: "transparent",
    width: "100%",
  },
  captureButtonWrapper: {
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "white",
    padding: 4,
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
  },
})

export default CameraStyles
