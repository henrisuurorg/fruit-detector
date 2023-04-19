import { Text, TouchableOpacity, View, SafeAreaView, Image } from "react-native"
import styles from "../styles.js"

const DisplayPhoto = ({ photo, discardPhoto }) => {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  )
}

export default DisplayPhoto
