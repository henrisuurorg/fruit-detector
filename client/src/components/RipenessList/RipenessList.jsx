import { View } from "react-native"
import BaseText from "../BaseText/BaseText"
import fruitRipenessInfo from "../../utils/fruitRipenessInfo"
import addArticle from "../../utils/addArticle"
import RipenessListStyles from "./RipenessList.styles"

const renderItem = (item) => {
  const [beforeHyphen, afterHyphen] = item.split(" - ")

  return (
    <BaseText key={item} style={RipenessListStyles.renderItem}>
      {`\u2022 ${beforeHyphen}`}
      {" - "}
      <BaseText style={{ fontWeight: "300" }}>{afterHyphen}</BaseText>
    </BaseText>
  )
}

const AltFruitList = ({ fruit, ripeness }) => {
  const ripenessInfo = fruitRipenessInfo[fruit] || ["No information found - Something went wrong with fetching the data. Deal with it."]
  
  return (
    <View>
      {ripeness ? (
        <BaseText>
          If it is an {fruit}, it seems to be
          <BaseText style={{ fontWeight: "400" }}> {ripeness}</BaseText>.
        </BaseText>
      ) : (
        <BaseText>
          Our model unfortunately cannot identify the ripeness of{" "}
          {addArticle(fruit)} yet,
          <BaseText style={{ fontWeight: "400" }}> however:</BaseText>
        </BaseText>
      )}
      <BaseText style={{ marginTop: 20 }}>
        To identify if {addArticle(fruit)} is ripe:
      </BaseText>
      {ripenessInfo.map(renderItem)}
    </View>
  )
}

export default AltFruitList
