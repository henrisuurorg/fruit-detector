import { View, Image, Button } from "react-native"
import CropStyles from "./CropView.styles"
import uploadImage from "../../utils/uploadImage.js"


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
      <Button
        style={CropStyles.buttonContainer}
        title="Upload"
        color="#FF0000"
        //onPress={() => uploadImage(route.params.photo)}
        onPress={() => uploadImage(route.params.photo)}
      />
    </View>
  )
}

export default CropView