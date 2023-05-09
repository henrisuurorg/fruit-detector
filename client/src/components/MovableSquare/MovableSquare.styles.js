import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  square: {
    position: "absolute",
    borderColor: "white",
    backgroundColor: "transparent",
    borderRadius: 10,
    overflow: 'hidden',
    zIndex: 5
  },
  imageOverlay: {
    position: "absolute",
    overflow: 'hidden',
    zIndex: 1
  }
})

export default styles
