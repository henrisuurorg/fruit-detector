import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, Dimensions, Image} from 'react-native';
import MovableSquare from './MovableSquare';
import { PinchGestureHandler, PinchGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated, { useAnimatedGestureHandler} from 'react-native-reanimated';


const AnimatedSquare = Animated.createAnimatedComponent(Image);

const SquareScaler = ({position, setPosition, squareLength, setSquareLength}) => {

    const pinchHandler = useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
            onActive: (event) => {
                console.debug(event);
            }
        }
    )

    return (
        <PinchGestureHandler onGestureEvent={pinchHandler}>
            <AnimatedSquare position={position} setPosition={setPosition} squareLength={squareLength.length} setSquareLength={setLength}/>
        </PinchGestureHandler>
    );
};