import {
    View,
    ActivityIndicator,
    Animated,
  } from "react-native"
  import React, { useEffect, useRef, useState } from "react"
  import LoadingStyles from "./AnimatedLoading.styles"
  import SearchIcon from "../../../assets/MagnifyingGlass.png"


const AnimatedLoader = (args) => {
    const positionX = args.positionX
    const positionY = args.positionY
    const squareLength = args.squareLength

    
    const originSize = 60
    const scaler = (squareLength / 200)
    const size = originSize * scaler
    const maxDistance = squareLength - size - 2;
    const minDistance = 2
    
    const randPosition = (origin) => {  
        let randomX = (Math.random() * maxDistance) + minDistance; // Generate a random number between minDistance and maxDistance
        let randomY = (Math.random() * maxDistance) + minDistance;
        let distance = Math.sqrt (Math.pow(origin.x - randomX, 2) + Math.pow(origin.y - randomY, 2) )
        const thresh = 50 * scaler
        while (distance < thresh) {
            randomX = (Math.random() * maxDistance) + minDistance; // Generate a random number between minDistance and maxDistance
            randomY = (Math.random() * maxDistance) + minDistance;
            distance = Math.sqrt (Math.pow(origin.x - randomX, 2) + Math.pow(origin.y - randomY, 2) )
        }

        return ({x: randomX, y: randomY})
    }

    const center = (squareLength / 2) - (size / 2)
    
    const moveTiming = 800
    const waitTiming = 400

    let positions = []
    positions[0] = randPosition({x: 0, y: 0})
    for (i = 1; i < 20; i++) {
        positions[i] = randPosition(positions[i - 1])
    }


    const position = useRef(new Animated.ValueXY(positions[0])).current

    useEffect(() => {
        const moveAnimation = Animated.loop(
            Animated.sequence([ 
                Animated.timing(position, {toValue: positions[1], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[1], duration: waitTiming, useNativeDriver: true}),

                Animated.timing(position, {toValue: positions[2], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[2], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[3], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[3], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[4], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[4], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[5], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[5], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[6], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[6], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[7], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[7], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[8], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[8], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[9], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[9], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[10], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[10], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[11], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[11], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[12], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[12], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[13], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[13], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[14], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[14], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[15], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[15], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[16], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[16], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[17], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[17], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[18], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[18], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[19], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[19], duration: waitTiming, useNativeDriver: true}),
                
                Animated.timing(position, {toValue: positions[0], duration: moveTiming, useNativeDriver: true}),
                Animated.timing(position, {toValue: positions[0], duration: waitTiming, useNativeDriver: true}),
            ])
        )

        moveAnimation.start();

        return () => {
            moveAnimation.stop();
        };

    }, []);

    const animatedStyle = {
        transform: position.getTranslateTransform(),
      };

    return (
        <View style={[LoadingStyles.loadingContainer, {top: (positionY - (squareLength / 2)), left: positionX - (squareLength / 2), width: squareLength, height: squareLength}]}>
            <Animated.Image style={[{height: size, width: size}, animatedStyle]} source={SearchIcon} />
        </View>
    )
}

export default AnimatedLoader