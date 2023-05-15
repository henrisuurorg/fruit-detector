import { View, ScrollView } from "react-native"
import React from "react"
import ResultsStyles from "./Results.styles"
import BaseText from "../../components/BaseText/BaseText"
import AltFruitList from "../../components/AltFruitList/AltFruitList"
import RipenessList from "../../components/RipenessList/RipenessList"
import ResultButton from "../../components/ResultButton/ResultButton"
import ErrorScreen from "../../components/ErrorScreen/ErrorScreen"
import backToCameraIcon from "../../../assets/backToCameraIcon.png"
import cropAgainIcon from "../../../assets/cropAgainIcon.png"
import Icon from "../../components/FruitIcon/FruitIcon"
import { StatusBar } from "expo-status-bar"

const ResultScreen = ({ navigation, route }) => {
  let fruit = null
  let confi = null
  let alts = null
  let ripen = null
  try {
    const result = JSON.parse(route.params.fruit)
    fruit = result["fruit"]
    confi = result["confidence"]
    alts = result["alts"]
    ripen = result["ripeness"]
      ? result["ripeness"]["prediction"].class
      : null
  }
  catch (error) {
    console.debug("\nFailed to parse response data!\n\n" + error )
    return (
      <ErrorScreen navigation={navigation} route={route}/>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto"/>
      <ScrollView
        style={ResultsStyles.container}
        contentContainerStyle={ResultsStyles.padding}
      >
        <View
          style={[
            {
              flexDirection: "row",
              alignContent: "flex-start",
            },
          ]}
        >
          <Icon fruitName={fruit} sideLength={58} />
          <BaseText style={ResultsStyles.title}>{fruit}</BaseText>
        </View>

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
    </View>
  )
}
export default ResultScreen
