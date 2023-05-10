import { StyleSheet } from "react-native"

const paddingVertical = Platform.OS === "ios" ? 60 : 40

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
  },
  innerContainer: {
    backgroundColor: "#404040",
    borderRadius: 15,
    padding: 20,
    marginTop: 20,
  },
  padding: {
    paddingVertical: paddingVertical,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 40,
    textTransform: "capitalize",
    fontWeight: "700",
    marginTop: 20,
  },
})

export default styles
