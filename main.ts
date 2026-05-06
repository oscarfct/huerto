function LEDoff () {
    basic.showIcon(IconNames.Asleep)
    basic.pause(5000)
    basic.clearScreen()
}
function LEDon () {
    basic.showIcon(IconNames.Umbrella)
}
let ENCENDER_WS = 1
let BOMBAAGUA_PIN = DigitalPin.P0
let ENCENDIDO_WS = 1 * 60 * 1000
let APAGADO_WS = 6 * 60 * 60 * 1000
radio.setGroup(1)
control.inBackground(function () {
    while (true) {
        pins.digitalWritePin(BOMBAAGUA_PIN, 1)
        LEDon()
        ENCENDER_WS = 1
        basic.pause(ENCENDIDO_WS)
        pins.digitalWritePin(BOMBAAGUA_PIN, 0)
        ENCENDER_WS = 0
        LEDoff()
        basic.pause(APAGADO_WS)
    }
})
