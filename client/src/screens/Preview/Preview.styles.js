import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "gray",
  },
  preview: {
    alignSelf: "stretch",
    flex: 1,
  },
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0,0,0,0.55)",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  buttonContainer: {
    position: 'absolute',
    top: "90%",
    left: 0,
    width: "100%",
    height: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: 30,
    backgroundColor: "transparent",
    zIndex: 10,
  },
  iconButton: {
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  loadingContainer: {
    position: "absolute",
    backgroundColor: "transparent",
    zIndex: 1000,
  },
  loadingIcon: {
    flex: 1,
    justifyContent: "center",
  }
})

export default styles
