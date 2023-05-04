import {
    Text,
    TouchableOpacity,
    View,
    Button,
    Image,
  } from "react-native"
  import React, { useState } from "react"
  import ResultsStyles from "./Results.styles"
  import RenderList from "../../components/RenderList/RenderList"
  

  const ResultScreen = ({ navigation, route }) => {
    const result = JSON.parse(route.params.fruit)
    const fruit = result["fruit"]
    const confi = result["confidence"]
    const alts = result["alts"]
    let ripen = result["ripeness"]
    if (ripen == null) {
      ripen = "Unknown"
    } else {
      ripen = ripen["prediction"].class
    }
    
    return (
      <View style = {ResultsStyles.background}>
        <View style={ResultsStyles.contentField}>
          <Image
            style={ResultsStyles.image}
            //source={require('../../../assets/AppIcon.png')}
            source={{ uri: route.params.image }}
          />
          <View style = {ResultsStyles.textContainer}> 
            <Text style = {ResultsStyles.text}>Result: {fruit}</Text>
            <Text style = {ResultsStyles.text}>Confidence: {confi}</Text>
            <Text style = {ResultsStyles.text}>Ripeness: {ripen}</Text>
            <Button  title="New Picture" onPress={() => navigation.navigate("Camera")} color="#495432"/>
            <RenderList data={alts} style={ResultsStyles.text}></RenderList>
          </View>
        </View>
        
      </View>
    )
  }
  export default ResultScreen

