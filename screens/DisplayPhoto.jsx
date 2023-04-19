import { Text, TouchableOpacity, View, SafeAreaView, Image } from "react-native"
import styles from "../styles.js"
import MovableSquare from "../MovableSquare.js"

const DisplayPhoto = ({ photo, discardPhoto }) => {
  return (
    <SafeAreaView style={[styles.container, {justifyContent: 'center', alignItems: 'center'}]}>
      <Image
        style={styles.preview}
        source={{ uri: "data:image/jpg;base64," + photo.base64 }}
      />
      
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.button_discard} onPress={discardPhoto}>
          <Text style={styles.text}>Discard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button_identify}>
          <Text style={styles.text}>Identify</Text>
        </TouchableOpacity>
      </View>
      <MovableSquare></MovableSquare>
    </SafeAreaView>
  )
}

export default DisplayPhoto
