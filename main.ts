let button = 0
let strip = neopixel.create(DigitalPin.P2, 14, NeoPixelMode.RGB)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        if (button == 1) {
            button = 0
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
        } else {
            button = 1
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
    }
})
basic.forever(function () {
    if (true) {
    	
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
	
})
