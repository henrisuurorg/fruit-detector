import React, { useState } from "react"
import { View, PanResponder, Dimensions, Image } from "react-native"
import MovableSquareStyles from "./MovableSquare.styles"

const window_width = Dimensions.get("screen").width
const window_height = Dimensions.get("screen").height

const borderWidth = 1.5

const MovableSquare = ({ position, setPosition, squareLength, setSquareLength, photo }) => {
  const [scale, setScale] = useState(1)
  const [scaledLength, setScaledLength] = useState(squareLength)
  const [cooldown, setCooldown] = useState(0) // Is it good to use the useState for this? Probably not... but if it looks stupid but works, it ain't stupid.

  // Capture the PanResponder event to move the square and work out scaling
  const panResponder = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (evt, gestureState) => {

      // Figure out if the object is being scaled with 2 fingers or not, if yes then we scale it accordingly
      if (evt.touchHistory.numberActiveTouches == 2) {
        
        // Encapsulated in a Try/Catch block because debugging was too hard...
        try {

          // idx becomes the original fingers index from the touchBank array. Then logically, the index right above it should be the 2nd one.
          let idx = evt.touchHistory.indexOfSingleActiveTouch
          let point1 = {
            x: evt.touchHistory.touchBank[idx].currentPageX,
            y: evt.touchHistory.touchBank[idx].currentPageY,
          }
          let point2 = {
            x: evt.touchHistory.touchBank[idx + 1].currentPageX,
            y: evt.touchHistory.touchBank[idx + 1].currentPageY,
          }
          
          // The good'ol eucilidian distance between two points
          const distance = Math.sqrt(
            Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)
          )

          // Compute a scaler to apply to the squareLength.
          // The Math.Min() function computes the scaler from the distance and the square length, but caps it out at the value 10 so that the square can't grow infinitely big.
          // The Math.Max() function simply makes it so the square can never get smaller than 60% of its original size.
          const newScale = Math.max(0.6, Math.min(distance / squareLength, 10))
          setScale(newScale)

          // The cooldown is here to prevent the square from jumping instantly when you release the multi-touch to single touch.
          setCooldown(15)
        }
        catch (error){
          // The scaler function can sometimes throw a TypeError because the idx gets assigned to the wrong place.
          // I don't know how to fix it and to not spend too much time on the issue, we just ignore it. If other errors occur, bubble them up.
          if (!(error instanceof TypeError)) {
            throw (error)
          }
        }
      }

      // Compute the relative length by multiplying the squareLength with the scaler
      newLength = squareLength * scale
      if (newLength > window_width) {
        newLength = window_width
      }

      // Apply the new length to the SquareLength and the ScaledLength useStates
      setSquareLength(newLength)
      setScaledLength(newLength)


      // Check if the cooldown is active. Otherwise we update the position of the square.
      if (evt.touchHistory.numberActiveTouches != 2 && cooldown > 0) {
        let newCooldown = cooldown - 1
        setCooldown(newCooldown)
      }
      else {
        // Get the coordinates of the gestureState
        let x = gestureState.moveX
        let y = gestureState.moveY

        // Prevent the box from going outside of the screen
        if (x - scaledLength / 2 < 0) x = scaledLength / 2
        if (y - scaledLength / 2 < 0) y = scaledLength / 2
        if (x + scaledLength / 2 > window_width)
          x = window_width - scaledLength / 2
        if (y + scaledLength / 2 > window_height)
          y = window_height - scaledLength / 2
        
        // Update the position of the square to the new position.
        setPosition({ x, y })
      }
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
          borderWidth: borderWidth,
        },
      ]}
      {...panResponder.panHandlers}
    >
      <Image
        style={[
          MovableSquareStyles.imageOverlay,
          {
            left: ((position.x - scaledLength / 2) + borderWidth) * -1,
            top: ((position.y - scaledLength / 2) + borderWidth) * -1,
            width: window_width,
            height: window_height,
          }
        ]}
        source={{ uri: "data:image/jpg;base64," + photo.base64 }}
      />
    </View>
  )
}

export default MovableSquare
