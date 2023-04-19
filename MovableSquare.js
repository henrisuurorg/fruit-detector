import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, Dimensions} from 'react-native';


const squareLength = 200;
// const { window_width, window_height } = Dimensions.get('window')
const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

const startX = (window_width / 2);
const startY = (window_height / 2);

const MovableSquare = () => {
  const [position, setPosition] = useState({x: startX, y: startY});
  
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      const x = gestureState.moveX
      const y = gestureState.moveY
      setPosition({ x, y });
    },
  });

  return (
    <View
      style={[
        styles.square,
        {
            left: position.x  - (squareLength / 2),
            top: position.y  - (squareLength / 2),
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
    width: squareLength,
    height: squareLength,
    backgroundColor: 'transparent',
  },
});

export default MovableSquare;
