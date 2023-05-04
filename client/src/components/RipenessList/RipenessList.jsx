import { View, FlatList } from "react-native"
import BaseText from "../BaseText/BaseText"
import fruitRipenessInfo from "../../utils/fruitRipenessInfo"

const renderItem = ({ item }) => (
  <BaseText
    style={{ fontWeight: "400", marginTop: 5 }}
  >{`\u2022 ${item}`}</BaseText>
)

const AltFruitList = ({ fruit, ripeness }) => {
  return (
    <View>
      {ripeness ? (
        <BaseText>
          If it is an {fruit}, it seems to be
          <BaseText style={{ fontWeight: "400" }}> {ripeness}</BaseText>.
        </BaseText>
      ) : (
        <BaseText>
          Our model unfortunately cannot identify the ripeness of a {fruit} yet,{" "}
          <BaseText style={{ fontWeight: "400" }}> however:</BaseText>
        </BaseText>
      )}
      <BaseText style={{ marginTop: 20 }}>
        To identify if a {fruit} is ripe:
      </BaseText>
      <FlatList data={fruitRipenessInfo[fruit]} renderItem={renderItem} />
    </View>
  )
}

export default AltFruitList
