function mostrar () {
    if (ENCENDER_WS == "1") {
        basic.showIcon(IconNames.Umbrella)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
}
input.onButtonPressed(Button.B, function () {
    basic.showString("T:" + ("" + input.temperature()) + "ºC")
})
let ENCENDER_WS = ""
let BOMBAAGUA_PIN = DigitalPin.P0
let ENCENDIDO_WS = 1 * 30 * 1000
let APAGADO_WS = 10 * 60 * 60 * 1000
let TIEMPO_WS = "" + control.eventTimestamp()
forever(function on_forever() {
    mostrar()
})
control.inBackground(function () {
    let ENCENDER_WS2: string;
while (true) {
        pins.digitalWritePin(BOMBAAGUA_PIN, 1)
        ENCENDER_WS += 1
        basic.pause(ENCENDIDO_WS)
        pins.digitalWritePin(BOMBAAGUA_PIN, 0)
        ENCENDER_WS += 0
        basic.pause(APAGADO_WS)
    }
})
