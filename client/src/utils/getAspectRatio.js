import { Dimensions } from "react-native"

const getAspectRatio = () => {
  const { width, height } = Dimensions.get("screen")
  return height / width
}

export default getAspectRatio
