import getAspectRatio from "../../src/utils/getAspectRatio"
import { Dimensions } from "react-native"

describe("getAspectRatio", () => {
  it("should return the correct aspect ratio", () => {
    Dimensions.get = jest.fn().mockReturnValue({ width: 375, height: 667 })
    expect(getAspectRatio()).toBeCloseTo(1.778, 2)
  })
})
