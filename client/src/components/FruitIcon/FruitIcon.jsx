import React from "react"
import { Image } from "react-native"
import FruitIconStyles from "./FruitIcon.styles"
import apple from "../../../assets/fruit_icons/apple.png"
import apricot from "../../../assets/fruit_icons/apricot.png"
import avocado from "../../../assets/fruit_icons/avocado.png"
import banana from "../../../assets/fruit_icons/banana.png"
import bell_pepper from "../../../assets/fruit_icons/bell_pepper.png"
//import black_berry from "../../../assets/fruit_icons/black_berry.png"
//import black_cherry from "../../../assets/fruit_icons/black_cherry.png"
//import black_currant from "../../../assets/fruit_icons/black_currant.png"
import blueberry from "../../../assets/fruit_icons/blueberry.png"
import cherry from "../../../assets/fruit_icons/cherry.png"
import grape from "../../../assets/fruit_icons/grape.png"
//import cloudberry from "../../../assets/fruit_icons/cloudberry.png"
//import cranberry from "../../../assets/fruit_icons/cranberry.png"
//import dragonfruit from "../../../assets/fruit_icons/dragonfruit.png"
import eggplant from "../../../assets/fruit_icons/eggplant.png"
//import elderberry from "../../../assets/fruit_icons/elderberry.png"
//import gooseberry from "../../../assets/fruit_icons/gooseberry.png"
import kiwi from "../../../assets/fruit_icons/kiwi.png"
import lemon from "../../../assets/fruit_icons/lemon.png"
//import lime from "../../../assets/fruit_icons/lime.png"
//import lingonberry from "../../../assets/fruit_icons/lingonberry.png"
import mango from "../../../assets/fruit_icons/mango.png"
//import nectarine from "../../../assets/fruit_icons/nectarine.png"
//import olive from "../../../assets/fruit_icons/olive.png"
import orange from "../../../assets/fruit_icons/orange.png"
import papaya from "../../../assets/fruit_icons/papaya.png"
//import pea from "../../../assets/fruit_icons/pea.png"
import pear from "../../../assets/fruit_icons/pear.png"
import pineapple from "../../../assets/fruit_icons/pineapple.png"
import pomegranate from "../../../assets/fruit_icons/pomegranate.png"
import raspberry from "../../../assets/fruit_icons/raspberry.png"
import strawberry from "../../../assets/fruit_icons/strawberry.png"
import tomato from "../../../assets/fruit_icons/tomato.png"
//import vanilla from "../../../assets/fruit_icons/vanilla.png"
import watermelon from "../../../assets/fruit_icons/watermelon.png"
//import zucchini from "../../../assets/fruit_icons/zucchini.png"
import defaultIcon from "../../../assets/fruit_icons/default_icon.png"

const FruitIcon = ({ fruitName, sideLength }) => {
  const fruitIcons = {
    apple: apple,
    apricot: apricot,
    avocado: avocado,
    banana: banana,
    "bell pepper": bell_pepper,
    "black berry": blueberry,
    "black cherry": cherry,
    "black currant": blueberry,
    blueberry: blueberry,
    cherry: cherry,
    clementine: orange,
    cloudberry: defaultIcon,
    cranberry: defaultIcon,
    dragonfruit: defaultIcon,
    eggplant: eggplant,
    elderberry: defaultIcon,
    gooseberry: defaultIcon,
    kiwi: kiwi,
    lemon: lemon,
    lime: lemon,
    lingonberry: defaultIcon,
    mango: mango,
    nectarine: apricot,
    olive: defaultIcon,
    orange: orange,
    papaya: papaya,
    pea: defaultIcon,
    pear: pear,
    pineapple: pineapple,
    pomegranate: pomegranate,
    raspberry: raspberry,
    strawberry: strawberry,
    tomato: tomato,
    vanilla: defaultIcon,
    watermelon: watermelon,
    zucchini: defaultIcon,
  }

  const fruitIconSource = fruitIcons[fruitName] || null

  return (
    fruitIconSource && (
      <Image
        source={fruitIconSource}
        style={FruitIconStyles(sideLength).icon}
      />
    )
  )
}

export default FruitIcon
