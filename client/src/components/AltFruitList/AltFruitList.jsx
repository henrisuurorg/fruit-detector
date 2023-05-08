import { TouchableOpacity, View } from "react-native"
import { useState } from 'react'
import BaseText from "../BaseText/BaseText"
import fruitEmojis from "../../utils/fruitEmojis"
import addArticle from "../../utils/addArticle"

const renderItem = (item, showConf) => (
  <BaseText key={item.class}>{`\t${fruitEmojis[item.class]} ${item.class}`} {showConf && " (" + item.confidence + ")"}</BaseText>
)

const AltFruitList = ({ fruit, alts, confi }) => {
  const [showConf, setShowConf] = useState(false)
  const altsSorted = alts.sort(
    (a, b) => parseFloat(b.confidence) - parseFloat(a.confidence)
  )

  const toggleConfidence = async () => {
    setShowConf(!showConf);
  }

  return (
    <View>
      <BaseText>
        According to the model this is {addArticle(fruit)} with
        <BaseText style={{ fontWeight: "400" }}> {confi} confidence</BaseText>.
      </BaseText>
      {alts.length > 0 && (
        <View>
          <BaseText style={{ marginTop: 20 }}>It also could be...</BaseText>
          <TouchableOpacity onPress={() => toggleConfidence()}>
          {altsSorted.map(item => renderItem(item, showConf))}
          </TouchableOpacity>
          <BaseText style={{ marginVertical: 5 }}>
            or something completely different.
          </BaseText>
        </View>
      )}
    </View>
  )
}

export default AltFruitList
