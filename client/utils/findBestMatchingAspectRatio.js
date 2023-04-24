const findBestMatchingAspectRatio = (supportedRatios, screenRatio) => {
  let bestMatch = supportedRatios[0]
  let minDiff = Math.abs(supportedRatios[0] - screenRatio)

  supportedRatios.forEach((ratio) => {
    const [width, height] = ratio.split(":")
    const currentRatio = parseInt(height, 10) / parseInt(width, 10)
    const diff = Math.abs(currentRatio - screenRatio)

    if (diff < minDiff) {
      minDiff = diff
      bestMatch = ratio
    }
  })

  return bestMatch
}

export default findBestMatchingAspectRatio
