import { Dimensions } from "react-native"

const getAspectRatio = () => {
  const { width, height } = Dimensions.get("window")
  return height / width
}

export default getAspectRatio
