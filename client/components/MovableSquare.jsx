import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, Dimensions} from 'react-native';
import Animated, { useAnimatedGestureHandler} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';



// const { window_width, window_height } = Dimensions.get('window')
const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

const startX = (window_width / 2);
const startY = (window_height / 2);


const MovableSquare = ({position, setPosition, squareLength, setSquareLength}) => {
  const [scale, setScale] = useState(1);
  const [scaledLength, setScaleLength] = useState(squareLength);


  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      //console.debug("-------------------------------");
      var x = gestureState.moveX
      var y = gestureState.moveY
      if (evt.touchHistory.numberActiveTouches == 2) {
        let point1 = {x: evt.touchHistory.touchBank[0].currentPageX, y: evt.touchHistory.touchBank[0].currentPageY}
        let point2 = {x: evt.touchHistory.touchBank[1].currentPageX, y: evt.touchHistory.touchBank[1].currentPageY}

        
        const distance = Math.sqrt( Math.pow( (point2.x - point1.x), 2 ) + Math.pow( (point2.y - point1.y), 2));

        const newScale = Math.max(0.6, Math.min(distance / squareLength, 10));
        setScale(newScale)
      }
      tmp = squareLength * scale
      if (tmp > window_width) {
        tmp = window_width;
      }
      setScaleLength(tmp);
      // Prevent the box from going outside of the screen
      if (x - scaledLength / 2< 0) x = scaledLength / 2;
      if (y - scaledLength / 2 < 0) y = scaledLength / 2;
      if (x + scaledLength / 2 > window_width) x = window_width - scaledLength / 2;
      if (y + scaledLength / 2 > window_height) y = window_height - scaledLength / 2;
      setPosition({ x, y });
    },
  });
  return (
        <View
          style={[
            styles.square,
            {
                left: position.x  - scaledLength / 2,
                top: position.y  - scaledLength / 2,
                width: scaledLength,
                height: scaledLength,
            },
          ]}
          {...panResponder.panHandlers}
        />
  );
};

const styles = StyleSheet.create({
  square: {
    position: 'absolute',
    borderWidth: 8,
    borderRadius: 25,
    borderColor: "blue",
    backgroundColor: 'transparent',
  },
});

export default MovableSquare;
