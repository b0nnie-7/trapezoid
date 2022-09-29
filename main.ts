let _2 = 0
game.splash("Let's calculate the area for a trapezoid. ")
let a = game.askForNumber("Enter the a of trapezoid(cm):", 2)
let b = game.askForNumber("Enter the b of trapezoid(cm):", 2)
let ab = a + b
game.splash("The first step of the area of a trapizoid" + a + "cm by" + b + "cm is" + convertToText(ab) + "cm.")
let ab2 = ab / 2
game.splash("The second step of the area of a trapizoid" + ab + "cm by" + _2 + "cm is" + convertToText(ab2) + "cm.")
let h = game.askForNumber("Enter the height of a trapizoid", 2)
let ab2h = ab2 * h
game.splash("the last step of the area of a trapizoid" + ab2 + "cm by" + h + "cm is" + convertToText(ab2h) + "cm2")
game.splash("Done")
