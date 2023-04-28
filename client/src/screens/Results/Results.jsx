import {
    Text,
    TouchableOpacity,
    View,
    Button,
    Image,
  } from "react-native"
  import React, { useState } from "react"
  import ResultsStyles from "./Results.styles"
  

  const ResultScreen = ({ navigation, route }) => {
    const result = JSON.parse(route.params.fruit)
    const fruit = result["fruit"]
    let ripen = result["ripeness"]
    
    if (ripen == null) {
      ripen = "Unkown"
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
            <Text style = {ResultsStyles.text}>Scanned result: {fruit}</Text>
            <Text style = {ResultsStyles.text}>Ripeness: {ripen}</Text>
            <Button title="New Picture" onPress={() => navigation.navigate("Camera")} color="#495432"/>
          </View>
        </View>
        
      </View>
    )
  }
  export default ResultScreen

