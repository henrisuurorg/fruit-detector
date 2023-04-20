import React, { useState } from 'react';
import { View, StyleSheet, PanResponder, Dimensions, Button} from 'react-native';



// const { window_width, window_height } = Dimensions.get('window')
const window_width = Dimensions.get('window').width;
const window_height = Dimensions.get('window').height;

const startX = (window_width / 2);
const startY = (window_height / 2);




const MovableSquare = ({position, setPosition, squareLength}) => {
  const squareHalfLength = squareLength / 2;
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      var x = gestureState.moveX
      var y = gestureState.moveY
      
      // Prevent the box from going outside of the screen
      if (x - squareHalfLength< 0) x = squareLength / 2;
      if (y - squareHalfLength < 0) y = squareLength / 2;
      if (x + squareHalfLength > window_width) x = window_width - squareHalfLength;
      if (y + squareHalfLength > window_height) y = window_height - squareHalfLength;
      setPosition({ x, y });
    },
  });

  function measure() {
    return position;
  }

  return (
    <View
      style={[
        styles.square,
        {
            left: position.x  - squareHalfLength,
            top: position.y  - squareHalfLength,
            width: squareLength,
            height: squareLength
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
    borderColor: "black",
    backgroundColor: 'transparent',
  },
});

export default MovableSquare;
