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
    "Check its color - Naturally ripened should be dark yellow with some dark spots while an artificially ripened one should be lemon yellow with some dark spots",
    "Check its stalk - Naturally ripened should have a black or brown stalk while an artificially ripened one should have green stalk",
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
    "Taste - Ripe blackberries should be sweet and juicy.",
  ],
  "black cherry": [
    "Color - should have a deep, dark color that is almost black.",
    "Shine - should be shiny and have a glossy appearance",
    "Give it a gentle squeeze - Ripe cherries should be firm to the touch but not too hard. ",
    "Stem - If the stem is green and firmly attached, the cherry may not be fully ripe. If the stem is brown or starting to wilt, the cherry may be overripe.",
    "Taste - Ripe cherries should be sweet and juicy.",
  ],
  "black currant": [
    "Color - should have a deep, dark color that is almost black.",
    "Give it a gentle squeeze - should be firm to the touch but not too hard. ",
    "Taste - Ripe cherries should be slightly tart and juicy, with a sweet flavor.",
  ],
  blueberry: [
    "Color - should have a deep blue color that is almost black",
    "Bloom - should have a light blue-grayish bloom on their surface.",
    "Size - Ripe blueberries should be plump and round. ",
    "Give it a gentle squeeze - Ripe cherries should be firm to the touch but not too hard. ",
    "Taste - should be sweet and juicy with a slightly tart taste.",
  ],
  cherry: [
    "Color - should have a deep, vibrant color that is bright and glossy",
    "Stem - If the stem is green and firmly attached, the cherry may not be fully ripe. If the stem is brown or starting to wilt, the cherry may be overripe.",
    "Size - should be plump and round. ",
    "Give it a gentle squeeze - Ripe cherries should be firm to the touch but not too hard. ",
    "Taste - should be sweet and juicy.",
  ],
  clementine: [
    "Check its color - should be bright orange",
    "Give it a gentle squeeze - should have a little give",
    "Smell it - should have a sweet, citrusy aroma",
  ],
  cloudberry: [
    "Color - ripe cloudberry fruit is usually a golden-orange color, with a soft, slightly furry texture.",
    "Smell it - sweet and slightly tangy aroma that is pleasant and not too strong. ",
    "Give it a gentle squeeze - should be soft and juicy ",
    "Taste - should be sweet with a hint of tartness",
  ],
  cranberry: [
    "Color - should be a deep, rich red color, with a slightly glossy appearance",
    "Texture - should have a smooth, plump appearance",
    "Smell it - sweet and slightly tangy aroma that is pleasant and not too strong. ",
    "Give it a gentle squeeze - ripe cranberries should be firm to the touch, with a slight bounce when dropped. ",
    "Taste - should be slightly tart, but not overly sour",
  ],
  coconut: [
    "Weight - a ripe coconut tends to feel heavier compared to an unripe one. Pick up the coconut and compare its weight to others of a similar size. If it feels relatively heavy, it could be an indication of ripeness.",
    "Shake and listen - hold the coconut close to your ear and give it a gentle shake. A ripe coconut will have a sloshing sound inside, indicating that the water (also known as coconut water) has formed. If you don't hear any sound, it may not be fully ripe.",
    "Eyes - examine the three eyes or germ spots on one end of the coconut. A ripe coconut often has slightly softer and drier eyes. If there are visible cracks around the eyes or if they are moldy, it may indicate overripeness or spoilage.",
  ],
  date: [
    "Texture - gently squeeze the date between your fingers. Ripe dates should feel soft and pliable but not mushy.",
    "Wrinkling - ripe dates often have a slight wrinkled or shriveled appearance, especially if they are of the softer or semi-soft varieties.",
    "Taste - finally, the taste test is crucial. Take a small bite and taste the date. Ripe dates should be sweet, with a rich, caramel-like flavor. If the date tastes overly firm, dry, or lacks sweetness, it may not be fully ripe.",
  ],
  dragonfruit: [
    "Color - should be a bright, vibrant color",
    "Smell it - ripe dragonfruit has a sweet and slightly floral aroma. ",
    "give it a gentle squeeze - Dragonfruit should be firm to the touch, but not too hard",
    "Scales - if the scales are starting to wither or turn brown, the fruit may be overripe.",
  ],
  durian: [
    "Smell - the aroma is one of the most crucial indicators of durian ripeness. A ripe durian emits a strong, distinctive, and often pungent smell. ",
    "Appearance - examine the outer shell of the durian. Ripe durians typically have a spiky, intact, and evenly-colored husk.",
    "Sound - hold the durian close to your ear and give it a gentle shake. You might hear a slight sloshing sound from the flesh inside.",
  ],
  eggplant: [
    "Color - should have smooth, shiny, and have a uniform color",
    "Stem - should be firm and not dried out.",
    "Give it a gentle squeeze - Eggplants should be firm to the touch, with a slight give when pressed",
    "weight - ripe eggplant should be heavy for their size",
  ],
  elderberry: [
    "Color - should be a deep, rich purple-black color",
    "Texure - should have a smooth, plump appearance. ",
    "Give it a gentle squeeze - Elderberries should be firm to the touch, but not too hard. ",
    "Taste - ripe elderberries should be slightly tart, with a sweet flavor. ",
  ],
  fig: [
    "Color - ripe figs tend to have a deep, rich color. Depending on the variety, they can range from green to purple, brown, or black. Look for a vibrant and even color across the entire fruit. Avoid figs that are mostly green or pale in color, as they may not be fully ripe.",
    "Texture - gently squeeze the fig to assess its firmness. Ripe figs should be soft to the touch, yielding slightly when pressed. They should have a tender texture but not feel overly mushy or squishy.",
    "Neck droop - check the stem or neck of the fig. A ripe fig often has a slight droop or bend at the neck, indicating that it has softened and is ready to be harvested.",
  ],
  grape: [
    "Firmness - gently squeeze a grape between your fingers. Ripe grapes should be slightly firm but yield to gentle pressure. They should not be too soft or mushy.",
    "Bloom - grapes naturally have a thin, powdery film called bloom on their skin. A ripe grape often has a slightly dull appearance due to the presence of this bloom. ",
    "Taste - taste a grape to assess its sweetness and flavor. Ripe grapes should be pleasantly sweet and have a balanced taste.",
  ],
  grapefruit: [
    "Firmness - gently squeeze the grapefruit with your fingers. A ripe grapefruit should give slightly when pressed, similar to how a ripe orange feels.",
    "Weight - ripe grapefruits tend to feel heavy for their size. Pick up the grapefruit and compare it to others of a similar size. If it feels relatively heavy, it can be an indication of ripeness.",
    "Skin texture - examine the skin of the grapefruit. A ripe grapefruit should have a smooth and slightly glossy texture. It should not have any significant blemishes, soft spots, or wrinkling.",
  ],
  guava: [
    "Smell it - take a whiff of the guava near the stem or blossom end. Ripe guavas typically emit a sweet and fragrant aroma, similar to a tropical scent",
    "Seeds - check the seeds inside the guava. In ripe guavas, the seeds are typically soft and edible.",
    "Texture - gently press the guava with your fingers. A ripe guava should yield slightly to pressure, indicating that it is soft and juicy",
  ],
  gooseberry: [
    "Color -  should be a greenish-yellow or pinkish-red color ",
    "Texure - should have a smooth, plump appearance. ",
    "Give it a gentle squeeze - should be firm to the touch, with a slight give when pressed ",
    "Taste - should be slightly tart, with a sweet flavor",
  ],
  jalapeno: [
    "Color - jalapenos change color as they ripen. Unripe jalapenos are typically bright green, while ripe ones transition to a deeper red color. The shade of red may vary depending on the variety. Look for a rich, vibrant red color as an indication of ripeness.",
    "Firmness - gently press the jalapeno between your fingers. Ripe jalapenos should have a slight give to them, but they should still feel firm and crisp",
    "Taste it - if you are comfortable with spicy heat, take a small bite or cut off a small piece of the jalapeno and taste it. Ripe jalapenos tend to be hotter and have a more developed flavor compared to underripe ones. ",
  ],
  kiwi: [
    "Color - should be brown and fuzzy",
    "Texure - should have smooth, unwrinkled skin",
    "Give it a gentle squeeze - should be slightly soft to the touch when ripe, but not mushy.",
    "Weight - ripe kiwifruit should feel heavy for their size.",
    "Smell it - ripe kiwifruit will have a sweet aroma.",
  ],
  lemon: [
    "Check its color - should be bright yellow in color, with no green or brown areas on the skin.",
    "Give it a gentle squeeze - should have a little give",
    "Smell it - should have a fresch, citrusy aroma",
  ], //Done
  lime: [
    "Check its color - Should be bright green in color, with no yellow or brown areas on the skin.",
    "Give it a gentle squeeze - should have a little give",
    "Smell it - should have a sweet, citrusy aroma",
  ], //Done
  lingonberry: [
    "check its color - should be bright red in color, with no green",
    "Give it a gentle squeeze - should have a little give",
    "Taste it - should be tart and slightly sweet, with a pleasant texture",
  ], //Done
  lychee: [
    "Color - ripe lychees have a vibrant and consistent color. The skin of ripe lychees is typically bright red or pinkish-red",
    "Peel removal - peel off the skin of the lychee. Ripe lychees are relatively easy to peel, and the skin should come off smoothly",
    "Texture - gently squeeze the lychee between your fingers. Ripe lychees should feel firm yet slightly soft and give a little under gentle pressure.",
  ],
  mango: [
    "Check its color - should be bright orange",
    "Give it a gentle squeeze - should feel slightly soft to the touch, especially near the stem. The skin should be smooth and free of any bruises or blemishes.",
    "Smell it - sniff the base it should give you a sweet, tropical aroma",
  ], //Done
  nectarine: [
    "Check its color - should be bright orange",
    "Give it a gentle squeeze - should have a little give",
    "Smell it - should have a sweet, citrusy aroma",
  ], //Done
  olive: [
    "Taste (Table olives) - should have a rich and complex flavor, with a balance of bitterness, saltiness, and fruitiness.",
    "Texture - They should be plump and firm to the touch, with a shiny and smooth skin",
    "Color - The color will depend on the variety, but in general, ripe table olives will be a deep purple or black color.",
  ], //Done
  orange: [
    "Check its color - should be bright orange",
    "Give it a gentle squeeze - should have a little give",
    "Smell it - should have a sweet, citrusy aroma",
  ], //Done
  papaya: [
    "Check its color - should have a bright orange color on the skin. Some varieties may have yellow or pink hues, but the overall color should be vibrant and even",
    "Shape - a ripe papaya should be uniformly shaped and free of any dents or soft spots",
    "Seed cavity - cut the papaya in half lengthwise and check the seed cavity. The seeds should be dark and scooped out easily. If the seeds are white or difficult to remove, the papaya may not be ripe.",
  ], //Done
  passionfruit: [
    "Feel - gently press the passion fruit with your fingers. Ripe passion fruits should have a slight give or softness when pressed. They should not be too hard or too soft.",
    "Shake - shake the passion fruit gently near your ear. If you hear the sound of liquid sloshing inside, it indicates that the fruit is likely ripe and filled with juice.",
    "Aroma - passion fruits generally have a fragrant aroma when ripe. Bring the fruit close to your nose and sniff it. If it has a sweet, floral scent, it is likely ripe and ready to eat.",
  ],
  pea: [
    "Appearance - A ripe pea pod should be plump and firm to the touch, with no wrinkles or discoloration. The pods should be bright green in color and have a glossy or shiny surface.",
    "Texture - when you open the pea pod, the peas should be fully formed and round. They should not be too small or too large, and they should have a tender texture.",
    "Taste it - the best way to determine if a pea is ripe is to taste it. A ripe pea should be sweet and tender, with a slightly crisp texture",
  ], //Done
  pear: [
    "Pressure test - apply gentle pressure to the neck of the pear with your thumb. If it yields to gentle pressure, the pear is ripe. If it's hard or too soft, it may not be fully ripe",
    "Give it a gentle squeeze - should be slightly soft to the touch, especially near the stem. The flesh should yield slightly when pressed but should not be too mushy. The skin should be smooth and free of any bruises or blemishes",
    "Smell it - should have a sweet and fruity aroma. If it doesn't smell like anything or has a musty smell, it may not be ripe.",
  ], //Done
  physalis: [
    "Color - ripe physalis fruits typically have a bright golden or orange color when fully mature. The husk should be dry and papery as well. Avoid physalis fruits that are still green or have a pale color as they may be unripe.",
    "Shake - gently shake the physalis inside the husk. If you hear the fruit rattling or feel it moving freely, it may indicate that the physalis is ripe.",
    "Taste - if possible, carefully remove the husk and taste a physalis fruit to assess its ripeness. Ripe physalis should have a sweet and tangy flavor with a hint of acidity.",
  ],
  pineapple: [
    "Check the sound - hold the pineapple up to your ear and thump it with your knuckles. A ripe pineapple will produce a deep, hollow sound",
    "Tug the leaves - gently tug on one of the leaves at the top of the pineapple. If it comes out easily, the pineapple is ripe. If it's difficult to remove, the pineapple may not be fully ripe yet",
    "Smell it - should have a sweet, tropical aroma that is easily detectable when you sniff the base of the fruit.",
  ], //Done
  pomegranate: [
    "Check its color - should have a deep, rich red color, pomegranates with yellow or green patches are not fully ripe",
    "Shape - a ripe pomegranate should be round and plump, with no visible dents or wrinkles",
    "Sound - gently tap the pomegranate with your fingers. A ripe pomegranate will make a deep, metallic sound, while an underripe one will make a dull sound",
  ], //Done
  pumpkin: [
    "Skin hardness - gently press the skin of the pumpkin with your fingernail or the pad of your thumb. Ripe pumpkins have a hard, tough skin that is difficult to puncture or dent. If your nail easily pierces the skin or the flesh feels soft, it may indicate an unripe pumpkin.",
    "Stem - examine the stem of the pumpkin. A ripe pumpkin typically has a dry and brown stem. If the stem is still green or soft, it may suggest that the pumpkin is not fully ripe or is starting to deteriorate.",
    "Weight - lift the pumpkin and feel its weight. Ripe pumpkins are generally heavy for their size. Compare the weight to other pumpkins of a similar size. If it feels relatively heavy it is ripe",
  ],
  raspberry: [
    "Check its color - should be brightly colored and have an even color distribution, should not have any white or green areas.",
    "Give it a gentle squeeze - should be firm but tender to the touch, not soft or mushy",
    "Smell it - Should have a strong, sweet aroma. If it doesn't smell like anything or has a sour smell, it may not be ripe",
  ], //Done
  strawberry: [
    "Check its color - should be bright red all over. Any white or green areas, the strawberry is not yet ripe.",
    "Give it a gentle squeeze - should be firm but tender to the touch, not soft or mushy",
    "Smell it - should have a strong, sweet aroma. If it doesn't smell like anything or has a sour smell, it may not be ripe",
  ], //Done
  tomato: [
    "Texture - should be firm but slightly soft to the touch, with a slight give when you press gently on it. The skin should be smooth and taut, with no wrinkles or cracks.",
    "Taste - the best way to determine if a tomato is ripe is to taste it. A ripe tomato should have a sweet and tangy flavor, with a juicy and tender flesh.",
    "Smell - a ripe tomato will have a strong, sweet, and slightly earthy aroma.",
  ], //Done
  vanilla: [
    "Check its color - should be bright orange",
    "Length - should be atleast 15cm long",
    "Appearence - plump and evenly colored, with a glossy or shiny surface",
  ], //Done
  watermelon: [
    "Sound - give the watermelon a top it should give a deep, hollow sound",
    "Color - Watermelon that has a uniform, dark green color with a dull or matte finish. The underside should have a creamy or yellowish spot",
    "Textrure - check the surface of the watermelon for any irregularities or soft spots. It should be firm and free of blemishes",
  ], //Done
  zucchini: [
    "Check its size - should be between 15 to 20 cm in length and 2 inches in diameter",
    "Give it a gentle squeeze - should have a little give but not mushy",
    "Check its color - dark green in color, some can have lighter or yellow-green skin ",
  ], //done
}

export default fruitRipenessInfo
