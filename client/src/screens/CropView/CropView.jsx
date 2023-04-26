import { View, Image, Button } from "react-native"
import CropStyles from "./CropView.styles"


const CropView = ({ navigation, route }) => {
  return (
    <View style={CropStyles.imageContainer}>
      <Image
        style={CropStyles.image}
        source={{ uri: route.params.photo }}
      />
      <Button
        style={CropStyles.buttonContainer}
        title="Return"
        color="#841584"
        onPress={() => navigation.navigate("Camera")}
      />
    </View>
  )
}

export default CropView