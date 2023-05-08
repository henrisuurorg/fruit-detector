const fruitRipenessInfo = {
  apple: [
    "Check its color - should have no green backcolour",
    "Give it a gentle squeeze - should have a slight softness",
    "If it's a green apple it should have a brght glowy green colour",
  ],
  apricot: [
    "Check its color - should be golden or orange",
    "Give it a gentle squeeze - should have a little give",
    "Smell it - should have a strong, sweet smell",
  ],
  avocado: [
    "Check its color - should be nearly black",
    "Give it a gentle squeeze - should have a little give",
    "Check its texture - should have bumpy texture",
  ],
  banana: [
    "Check its color - ","Naturally ripened: should be dark yellow with some dark spots","Artificially ripened: should be lemon yellow with some dark spots",
    "Check its stalk - ","Naturally ripened: should have a black or brown stalk","Artificially ripened: should have green stalk",
  ],
  "bell pepper": [
    "Check its color - should be fully yellow, orange, or red",
    "Give it a gentle squeeze - ripe peppers are firm, but slightly soft to the touch.",
    "Hold the pepper - A ripe pepper will feel heavy for its size",
    "Check its stem - If the stem is green and firm, the pepper may not be fully ripe. If the stem is brown or starting to wilt, the pepper may be overripe.",
  ],
  "black berry": [
    "Check its colour - Blackberries should be a deep, rich black color. ",
    "Shine - Look for blackberries that are shiny and have a glossy appearance.",
    "Give it a gentle squeeze - Ripe blackberries should be firm, but not too hard or too soft.",
    "Smell it - Ripe blackberries should have a sweet, fruity aroma. ",
    "Taste - Ripe blackberries should be sweet and juicy."
  ],
  "black cherry": [
    "Color - should have a deep, dark color that is almost black.", 
    "Shine - should be shiny and have a glossy appearance",
    "Give it a gentle squeeze - Ripe cherries should be firm to the touch but not too hard. ",
    "Stem - If the stem is green and firmly attached, the cherry may not be fully ripe. If the stem is brown or starting to wilt, the cherry may be overripe.",
    "Taste - Ripe cherries should be sweet and juicy."
  ],
  "black currant": [
    "Color - should have a deep, dark color that is almost black.", 
    "Give it a gentle squeeze - should be firm to the touch but not too hard. ",
    "Taste - Ripe cherries should be slightly tart and juicy, with a sweet flavor."
  ],
  blueberry: [
    "Color - should have a deep blue color that is almost black", 
    "Bloom - should have a light blue-grayish bloom on their surface.",
    "Size - Ripe blueberries should be plump and round. ",
    "Give it a gentle squeeze - Ripe cherries should be firm to the touch but not too hard. ",
    "Taste - should be sweet and juicy with a slightly tart taste."

  ],
  cherry: [
    "Color - should have a deep, vibrant color that is bright and glossy", 
    "Stem - If the stem is green and firmly attached, the cherry may not be fully ripe. If the stem is brown or starting to wilt, the cherry may be overripe.",
    "Size - should be plump and round. ",
    "Give it a gentle squeeze - Ripe cherries should be firm to the touch but not too hard. ",
    "Taste - should be sweet and juicy."
  ],
  clementine: [
    "Check its color - should be bright orange",
    "Give it a gentle squeeze - should have a little give",
    "smell it - should have a sweet, citrusy aroma",
  ],
  cloudberry: [
    "Color - Ripe cloudberry fruit is usually a golden-orange color, with a soft, slightly furry texture.", 
    "Smell it - sweet and slightly tangy aroma that is pleasant and not too strong. ",
    "give it a gentle squeeze - should be soft and juicy ",
    "Taste - should be sweet with a hint of tartness"
  ],
  cranberry: [
    "Color - should be a deep, rich red color, with a slightly glossy appearance", 
    "texture - should have a smooth, plump appearance",
    "Smell it - sweet and slightly tangy aroma that is pleasant and not too strong. ",
    "Give it a gentle squeeze - Ripe cranberries should be firm to the touch, with a slight bounce when dropped. ",
    "Taste - should be slightly tart, but not overly sour"
  ],
  dragonfruit: [
    "Color - should be a bright, vibrant color", 
    "Smell it - Ripe dragonfruit has a sweet and slightly floral aroma. ",
    "give it a gentle squeeze - Dragonfruit should be firm to the touch, but not too hard",
    "Scales - If the scales are starting to wither or turn brown, the fruit may be overripe."
  ],
  eggplant: [
    "Color - should have smooth, shiny, and have a uniform color", 
    "Stem - should be firm and not dried out.",
    "give it a gentle squeeze - Eggplants should be firm to the touch, with a slight give when pressed",
    "weight - ripe eggplant should be heavy for their size"
  ],
  elderberry: [
    "Color - should be a deep, rich purple-black color", 
    "Texure - should have a smooth, plump appearance. ",
    "Give it a gentle squeeze - Elderberries should be firm to the touch, but not too hard. ",
    "Taste - Ripe elderberries should be slightly tart, with a sweet flavor. "
  ],
  gooseberry: [
    "Color -  should be a greenish-yellow or pinkish-red color ", 
    "texure - should have a smooth, plump appearance. ",
    "give it a gentle squeeze - should be firm to the touch, with a slight give when pressed ",
    "Taste - should be slightly tart, with a sweet flavor"

  ],
  kiwi: [
    "Color - should be brown and fuzzy", 
    "texure - should have smooth, unwrinkled skin",
    "give it a gentle squeeze - should be slightly soft to the touch when ripe, but not mushy.",
    "Weight - Ripe kiwifruit should feel heavy for their size.",
    "smell it - Ripe kiwifruit will have a sweet aroma."
  ],
  lemon: [
    "check its color - should be bright yellow in color, with no green or brown areas on the skin.",
    "give it a gentle squeeze - should have a little give",
    "smell it - should have a Fresch, citrusy aroma",
  ],//Done
  lime: [
    "check its color - Should be bright green in color, with no yellow or brown areas on the skin.",
    "give it a gentle squeeze - should have a little give",
    "smell it - should have a sweet, citrusy aroma",
  ],//Done
  lingonberry: [
    "check its color - should be bright red in color, with no green",
    "give it a gentle squeeze - should have a little give",
    "Taste it - should be tart and slightly sweet, with a pleasant texture",
  ],//Done
  mango: [
    "check its color - should be bright orange",
    "give it a gentle squeeze - should feel slightly soft to the touch, especially near the stem. The skin should be smooth and free of any bruises or blemishes.",
    "smell it - Sniff the base it should give you a sweet, tropical aroma",
  ],//Done
  nectarine: [
    "check its color - should be bright orange",
    "give it a gentle squeeze - should have a little give",
    "smell it - should have a sweet, citrusy aroma",
  ],//Done
  olive: [
    "Taste (Table olives) - should have a rich and complex flavor, with a balance of bitterness, saltiness, and fruitiness.",
     "Texture - They should be plump and firm to the touch, with a shiny and smooth skin", 
     "Color - The color will depend on the variety, but in general, ripe table olives will be a deep purple or black color.",
  ],//Done
  orange: [
    "check its color - should be bright orange",
    "give it a gentle squeeze - should have a little give",
    "smell it - should have a sweet, citrusy aroma",
  ],//Done
  papaya: [
    "check its color - should have a bright orange color on the skin. Some varieties may have yellow or pink hues, but the overall color should be vibrant and even",
    "Shape - A ripe papaya should be uniformly shaped and free of any dents or soft spots",
    "Seed cavity - Cut the papaya in half lengthwise and check the seed cavity. The seeds should be dark and scooped out easily. If the seeds are white or difficult to remove, the papaya may not be ripe.",
  ],//Done
  pea: [
    "Appearance - A ripe pea pod should be plump and firm to the touch, with no wrinkles or discoloration. The pods should be bright green in color and have a glossy or shiny surface.",
    "Texture - When you open the pea pod, the peas should be fully formed and round. They should not be too small or too large, and they should have a tender texture.",
    "Taste it - The best way to determine if a pea is ripe is to taste it. A ripe pea should be sweet and tender, with a slightly crisp texture",
  ],//Done
  pear: [
    "Pressure test - Apply gentle pressure to the neck of the pear with your thumb. If it yields to gentle pressure, the pear is ripe. If it's hard or too soft, it may not be fully ripe",
    "give it a gentle squeeze - should be slightly soft to the touch, especially near the stem. The flesh should yield slightly when pressed but should not be too mushy. The skin should be smooth and free of any bruises or blemishes",
    "smell it - should have a sweet and fruity aroma. If it doesn't smell like anything or has a musty smell, it may not be ripe.",
  ],//Done 
  pineapple: [
    "check the sound - Hold the pineapple up to your ear and thump it with your knuckles. A ripe pineapple will produce a deep, hollow sound",
    "Tug the leaves - Gently tug on one of the leaves at the top of the pineapple. If it comes out easily, the pineapple is ripe. If it's difficult to remove, the pineapple may not be fully ripe yet",
    "smell it - should have a sweet, tropical aroma that is easily detectable when you sniff the base of the fruit.",
  ],//Done 
  pomegranate: [
    "check its color - should have a deep, rich red color, pomegranates with yellow or green patches are not fully ripe",
    "Shape - A ripe pomegranate should be round and plump, with no visible dents or wrinkles",
    "Sound - Gently tap the pomegranate with your fingers. A ripe pomegranate will make a deep, metallic sound, while an underripe one will make a dull sound",
  ],//Done
  raspberry: [
    "check its color - Should be brightly colored and have an even color distribution, should not have any white or green areas.",
    "give it a gentle squeeze - should be firm but tender to the touch, not soft or mushy",
    "smell it - Should have a strong, sweet aroma. If it doesn't smell like anything or has a sour smell, it may not be ripe",
  ],//Done
  strawberry: [
    "check its color - Should be bright red all over. Any white or green areas, the strawberry is not yet ripe.",
    "give it a gentle squeeze - should be firm but tender to the touch, not soft or mushy",
    "smell it - Should have a strong, sweet aroma. If it doesn't smell like anything or has a sour smell, it may not be ripe",
  ],//Done
  tomato: [
    "Texture - Should be firm but slightly soft to the touch, with a slight give when you press gently on it. The skin should be smooth and taut, with no wrinkles or cracks.",
    "Taste - The best way to determine if a tomato is ripe is to taste it. A ripe tomato should have a sweet and tangy flavor, with a juicy and tender flesh.",
    "Smell - A ripe tomato will have a strong, sweet, and slightly earthy aroma.",
  ],//Done
  vanilla: [
    "Check its color - should be bright orange",
    "Length - should be atleast 15cm long",
    "Appearence - plump and evenly colored, with a glossy or shiny surface",
  ],//Done
  watermelon: [
    "Sound - Give the watermelon a top it should give a deep, hollow sound",
    "Color - watermelon that has a uniform, dark green color with a dull or matte finish. The underside should have a creamy or yellowish spot",
    "Textrure - Check the surface of the watermelon for any irregularities or soft spots. It should be firm and free of blemishes",
  ], //Done
  zucchini: [
    "Check its size - should be between 15 to 20 cm in length and 2 inches in diameter",
    "Give it a gentle squeeze - should have a little give but not mushy",
    "Check its color - dark green in color, some can have lighter or yellow-green skin ",
  ], //done
}

export default fruitRipenessInfo
