import React from "react"
import { Image } from "react-native"
import FruitIconStyles from "./FruitIcon.styles"
import apple from "../../../assets/fruit_icons/apple.png"
import avocado from "../../../assets/fruit_icons/avocado.png"
import banana from "../../../assets/fruit_icons/banana.png"
import bell_pepper from "../../../assets/fruit_icons/bell_pepper.png"
import black_berry from "../../../assets/fruit_icons/blackberry.png"
import blueberry from "../../../assets/fruit_icons/blueberry.png"
import coconut from "../../../assets/fruit_icons/coconut.png"
import cherry from "../../../assets/fruit_icons/cherry.png"
import cranberry from "../../../assets/fruit_icons/cranberry.png"
// import date from "../../../assets/fruit_icons/date.png"
import pomegranate from "../../../assets/fruit_icons/pomegranate.png"
import durian from "../../../assets/fruit_icons/durian.png"
import dragonfruit from "../../../assets/fruit_icons/dragonfruit.png"
import eggplant from "../../../assets/fruit_icons/eggplant.png"
import fig from "../../../assets/fruit_icons/fig.png"
import grape from "../../../assets/fruit_icons/grape.png"
import grapefruit from "../../../assets/fruit_icons/grapefruit.png"
import guava from "../../../assets/fruit_icons/guava.png"
import kiwi from "../../../assets/fruit_icons/kiwi.png"
import jalapeno from "../../../assets/fruit_icons/jalapeno.png"
import lemon from "../../../assets/fruit_icons/lemon.png"
import lime from "../../../assets/fruit_icons/lime.png"
import lychee from "../../../assets/fruit_icons/lychee.png"
import mango from "../../../assets/fruit_icons/mango.png"
import nectarine from "../../../assets/fruit_icons/nectarine.png"
import olive from "../../../assets/fruit_icons/olive.png"
import orange from "../../../assets/fruit_icons/orange.png"
import papaya from "../../../assets/fruit_icons/papaya.png"
import pear from "../../../assets/fruit_icons/pear.png"
import passion_fruit from "../../../assets/fruit_icons/passion_fruit.png"
import physalis from "../../../assets/fruit_icons/physalis.png"
import pineapple from "../../../assets/fruit_icons/pineapple.png"
import pumpkin from "../../../assets/fruit_icons/pumpkin.png"
import raspberry from "../../../assets/fruit_icons/raspberry.png"
import strawberry from "../../../assets/fruit_icons/strawberry.png"
import tomato from "../../../assets/fruit_icons/tomato.png"
import watermelon from "../../../assets/fruit_icons/watermelon.png"
import zucchini from "../../../assets/fruit_icons/zucchini.png"
import defaultIcon from "../../../assets/fruit_icons/default_icon.png"

const FruitIcon = ({ fruitName, sideLength }) => {
  const fruitIcons = {
    apple: apple,
    avocado: avocado,
    banana: banana,
    "bell pepper": bell_pepper,
    "black berry": black_berry,
    blueberry: blueberry,
    cherry: cherry,
    clementine: orange,
    coconut: coconut,
    cranberry: cranberry,
    //date: date,
    dragonfruit: dragonfruit,
    durian: durian,
    eggplant: eggplant,
    fig: fig,
    grape: grape,
    grapefruit: grapefruit,
    guava: guava,
    jalapeno: jalapeno,
    kiwi: kiwi,
    lemon: lemon,
    lime: lime,
    lychee: lychee,
    mango: mango,
    nectarine: nectarine,
    olive: olive,
    orange: orange,
    papaya: papaya,
    "passion fruit": passion_fruit,
    pear: pear,
    pomegranate: pomegranate,
    physalis: physalis,
    pineapple: pineapple,
    pumpkin: pumpkin,
    raspberry: raspberry,
    strawberry: strawberry,
    tomato: tomato,
    watermelon: watermelon,
    zucchini: zucchini,
  }

  const fruitIconSource = fruitIcons[fruitName] || defaultIcon

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
