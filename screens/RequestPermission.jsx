import { Button, Text, View } from "react-native"
import styles from "../styles.js"

const DisplayPermission = ({ request }) => {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center" }}>
        We need your permission to show the camera
      </Text>
      <Button onPress={request} title="grant permission" />
    </View>
  )
}

export default DisplayPermission
