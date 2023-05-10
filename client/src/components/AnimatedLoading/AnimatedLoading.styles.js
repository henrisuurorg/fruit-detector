import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    loadingContainer: {
        position: "absolute",
        backgroundColor: "transparent",
        zIndex: 1000,
      },
      loadingIcon: {
        flex: 1,
        position: "absolute",
        height: "10%",
        width: "10%",
        left: "45%",
        top: "45%"
      }
  })
export default styles
