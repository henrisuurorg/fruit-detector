import { Text } from "react-native"
import BaseTextStyles from "./BaseText.styles"

const BaseText = ({ children, style }) => {
  return <Text style={[BaseTextStyles.text, style]}>{children}</Text>
}

export default BaseText
