input.onButtonPressed(Button.A, function () {
    radio.sendString("Yes")
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendString("No")
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendString("Yes")
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else if (input.pinIsPressed(TouchPin.P0)) {
        radio.sendString("Heart")
        basic.showLeds(`
            . . . # #
            . . # . .
            . # . . #
            # . . # .
            # . # . #
            `)
    } else {
        radio.sendString("Drop away ")
        basic.showIcon(IconNames.Heart)
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Yes") {
        basic.showIcon(IconNames.Yes)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == "No") {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedString == "Heart") {
        basic.showIcon(IconNames.Heart)
    } else if (receivedString == "Drop away ") {
        basic.showLeds(`
            . . . # #
            . . # . .
            . # . . #
            # . . # .
            # . # . #
            `)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("No")
    basic.showIcon(IconNames.No)
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(7)
