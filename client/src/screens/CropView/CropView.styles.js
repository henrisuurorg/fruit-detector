import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    buttonContainer: {
        borderWidth:25,
        color: "#841584",
    },
    imageContainer: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'black'
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 25,
      borderWidth: 8,
      borderColor: 'gray',
      resizeMode: 'contain',
    },
  });

export default styles