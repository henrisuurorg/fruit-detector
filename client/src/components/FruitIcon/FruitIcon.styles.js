import { StyleSheet } from "react-native"

const styles = (sideLength) => {
  return StyleSheet.create({
    icon: {
      width: sideLength,
      height: sideLength,
      alignSelf: "flex-end",
      marginRight: 5,
    },
  })
}

export default styles
