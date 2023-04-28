import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: "black",

    },
    image: {
      height: 200,
      width: 200,
      borderWidth: 5,
      borderColor: "#495432",
      borderRadius: 25,
      alignContent: "center",
      justifyContent: "center"
    },
    background: {
      flex: 1,
      backgroundColor: "#A6B64B",
      alignItems: "center",
      justifyContent: "center"
    },
    text: {
      fontSize: 24,
      fontWeight: "bold",
      color: "white",
    },
    textContainer: {
      flex: 3,
      flexDirection: "column",
      backgroundColor: "transparent",
      margin: 20,
    },
    contentField: {
      flex: 3,
      flexDirection: "column",
      alignItems:"center",
      top: "25%",
    }
  });

export default styles