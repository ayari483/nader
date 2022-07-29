input.onButtonPressed(Button.A, function () {
    basic.showString("A")
    basic.clearScreen()
    basic.showString("" + (input.lightLevel()))
    if (input.lightLevel() > 130) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . # . .
            `)
    } else if (input.lightLevel() < 130) {
        basic.showLeds(`
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            . . . . .
            `)
    }
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
