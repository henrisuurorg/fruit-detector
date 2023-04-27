import {
    Text,
    TouchableOpacity,
    View,
    SafeAreaView,
    Image,
  } from "react-native"
  import React, { useState } from "react"
  import ResultsStyles from "./Results.styles"
  

  const ResultScreen = ({ navigation, route }) => {
    const result = route.params.fruit
  
    return (
      <View style = {ResultsStyles.container}>
        <Text>The scanning result is: {result}</Text>
      </View>
    )
  }
  export default ResultScreen

