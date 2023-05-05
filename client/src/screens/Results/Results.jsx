import { View, ScrollView } from "react-native"
import React from "react"
import ResultsStyles from "./Results.styles"
import fruitEmojis from "../../utils/fruitEmojis"
import BaseText from "../../components/BaseText/BaseText"
import AltFruitList from "../../components/AltFruitList/AltFruitList"
import RipenessList from "../../components/RipenessList/RipenessList"
import ResultButton from "../../components/ResultButton/ResultButton"
import backToCameraIcon from "../../../assets/backToCameraIcon.png"
import cropAgainIcon from "../../../assets/cropAgainIcon.png"

const ResultScreen = ({ navigation, route }) => {
  const result = JSON.parse(route.params.fruit)
  const fruit = result["fruit"]
  const confi = result["confidence"]
  const alts = result["alts"]
  const ripen = result["ripeness"]
    ? result["ripeness"]["prediction"].class
    : null

  return (
    <ScrollView style={ResultsStyles.container}>
      <BaseText
        style={{
          fontSize: 40,
          textTransform: "capitalize",
          fontWeight: "400",
          marginTop: 40,
        }}
      >{`${fruitEmojis[fruit]} ${fruit}`}</BaseText>
      <View style={ResultsStyles.innerContainer}>
        <AltFruitList fruit={fruit} alts={alts} confi={confi} />
      </View>
      <View style={ResultsStyles.innerContainer}>
        <RipenessList fruit={fruit} ripeness={ripen} />
      </View>
      <View style={ResultsStyles.innerContainer}>
        <BaseText>Want to scan again?</BaseText>
        <BaseText style={{ marginTop: 10 }}>
          Not the result you are looking for?
        </BaseText>
        <ResultButton
          title="Back to Camera"
          onPress={() => navigation.navigate("Camera")}
          style={{ marginTop: 20 }}
          icon={backToCameraIcon}
        />
        <ResultButton
          title="Crop Again"
          onPress={() => navigation.goBack()}
          style={{ marginTop: 10 }}
          icon={cropAgainIcon}
        />
      </View>
    </ScrollView>
  )
}
export default ResultScreen
