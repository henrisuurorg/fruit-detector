import findBestMatchingAspectRatio from "../../src/utils/findBestMatchingAspectRatio"

describe("findBestMatchingAspectRatio", () => {
  it("should return the best matching aspect ratio", () => {
    const supportedRatios = ["16:9", "4:3", "3:2"]
    const screenRatio = 1.778
    expect(findBestMatchingAspectRatio(supportedRatios, screenRatio)).toEqual(
      "16:9"
    )
  })
})
