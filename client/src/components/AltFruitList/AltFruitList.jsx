import { View } from "react-native"
import BaseText from "../BaseText/BaseText"
import fruitEmojis from "../../utils/fruitEmojis"

const renderItem = (item) => (
  <BaseText key={item.class}>{`\t${fruitEmojis[item.class]} ${
    item.class
  }`}</BaseText>
)

const AltFruitList = ({ fruit, alts, confi }) => {
  const altsSorted = alts.sort(
    (a, b) => parseFloat(b.confidence) - parseFloat(a.confidence)
  )
  return (
    <View>
      <BaseText>
        According to the model this is a {fruit} with
        <BaseText style={{ fontWeight: "400" }}> {confi} confidence</BaseText>.
      </BaseText>
      {alts.length > 0 && (
        <View>
          <BaseText style={{ marginTop: 20 }}>It also could be...</BaseText>
          {altsSorted.map(renderItem)}
          <BaseText style={{ marginVertical: 5 }}>
            or something completely different.
          </BaseText>
        </View>
      )}
    </View>
  )
}

export default AltFruitList
