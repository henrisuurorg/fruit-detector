import React, { useState } from "react"
import { View, PanResponder, Dimensions } from "react-native"
import MovableSquareStyles from "./MovableSquare.styles"

const window_width = Dimensions.get("window").width
const window_height = Dimensions.get("window").height

const MovableSquare = ({ position, setPosition, squareLength, setSquareLength }) => {
  const [scale, setScale] = useState(1)
  const [scaledLength, setScaleLength] = useState(squareLength)

  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {
      // Figure out if the object is being scaled with 2 fingers or not
      if (evt.touchHistory.numberActiveTouches == 2) {
        let idx = evt.touchHistory.indexOfSingleActiveTouch
        let point1 = {
          x: evt.touchHistory.touchBank[idx].currentPageX,
          y: evt.touchHistory.touchBank[idx].currentPageY,
        }
        let point2 = {
          x: evt.touchHistory.touchBank[idx + 1].currentPageX,
          y: evt.touchHistory.touchBank[idx + 1].currentPageY,
        }

        const distance = Math.sqrt(
          Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
        )
        const newScale = Math.max(0.6, Math.min(distance / squareLength, 10))
        setScale(newScale)
      }
      tmp = squareLength * scale
      if (tmp > window_width) {
        tmp = window_width
      }
      setSquareLength(tmp)
      setScaleLength(tmp)

      //Move the square to the center of the tocuhEvent
      let x = gestureState.moveX
      let y = gestureState.moveY
      // Prevent the box from going outside of the screen
      if (x - scaledLength / 2 < 0) x = scaledLength / 2
      if (y - scaledLength / 2 < 0) y = scaledLength / 2
      if (x + scaledLength / 2 > window_width)
        x = window_width - scaledLength / 2
      if (y + scaledLength / 2 > window_height)
        y = window_height - scaledLength / 2
      setPosition({ x, y })
    },
  })
  return (
    <View
      style={[
        MovableSquareStyles.square,
        {
          left: position.x - scaledLength / 2,
          top: position.y - scaledLength / 2,
          width: scaledLength,
          height: scaledLength,
        },
      ]}
      {...panResponder.panHandlers}
    />
  )
}

export default MovableSquare
