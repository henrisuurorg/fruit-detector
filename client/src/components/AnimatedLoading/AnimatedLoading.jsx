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
    
    const randValue = () => {  
        let random = (Math.random() * maxDistance) + minDistance; // Generate a random number between minDistance and maxDistance
        return random
    }

    const center = (squareLength / 2) - (size / 2)
    const position = useRef(new Animated.ValueXY({ x: center, y: center })).current
    const delay = 800

    useEffect(() => {
        const moveAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: randValue(), y: randValue()}, duration: delay, useNativeDriver: true}),
                Animated.timing(position, {toValue: {x: center, y: center}, duration: delay, useNativeDriver: true}),
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