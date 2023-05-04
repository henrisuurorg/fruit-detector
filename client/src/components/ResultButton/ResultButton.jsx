import { TouchableOpacity, Image } from "react-native"
import BaseText from "../BaseText/BaseText"

const ResultButton = ({ onPress, title, icon, style }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          borderWidth: 1,
          borderColor: "#F4FFAE",
          borderRadius: 10,
          padding: 10,
          justifyContent: "flex-start",
        },
        style,
      ]}
    >
      <Image
        source={icon}
        style={{
          width: 20,
          height: 20,
        }}
      />
      <BaseText
        style={{
          flex: 1,
          fontWeight: "600",
          textAlign: "center",
          marginLeft: -20,
        }}
      >
        {title}
      </BaseText>
    </TouchableOpacity>
  )
}

export default ResultButton
