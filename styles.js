import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#000",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  navBar: {
    flex: 2,
    flexDirection: "row",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 15,
    left: 0,
    backgroundColor: "transparent",
    opacity: 1,
  },
  button_identify: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: "#327a3d",
    backgroundColor: "#3cc946",
    borderBottomWidth: 6,
    borderLeftWidth: 4,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  button_discard: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: "#7a3232",
    backgroundColor: "#b52d2d",
    borderBottomWidth: 6,
    borderRightWidth: 4,
    alignSelf: "flex-end",
    alignItems: "center",
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
    alignSelf: "flex-end",
    alignItems: "center",
  },
  default_button: {
    flex: 1,
    backgroundColor: "transparent",
    borderBottomWidth: 6,
    borderRightWidth: 4,
    borderLeftWidth: 4,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
})

export default styles
