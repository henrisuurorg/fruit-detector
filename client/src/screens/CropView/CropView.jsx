import { Camera, CameraType } from "expo-camera"
import { useState, useEffect, useRef } from "react"
import { View, Image, StyleSheet, Button } from "react-native"


const CropView = ({ navigation, route }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{ uri: route.params.photo }}
      />
      <Button
        style={styles.container}
        title="Return"
        onPress={() => navigation.navigate("Camera")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    imageContainer: {
      flex: 2,
      marginVertical: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'contain',
    },
  });

export default CropView