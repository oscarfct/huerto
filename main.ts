function mostrar () {
    if (ENCENDER_WS == 1) {
    	
    }
}
let ENCENDER_WS = 0
ENCENDER_WS = 1
let BOMBAAGUA_PIN = DigitalPin.P0
let ENCENDIDO_WS = 1 * 20 * 1000
let APAGADO_WS = 10 * 60 * 60 * 1000
forever(function on_forever() {
    mostrar()
})
control.inBackground(function () {
    while (true) {
        pins.digitalWritePin(BOMBAAGUA_PIN, 1)
        ENCENDER_WS = 1
        basic.showIcon(IconNames.Umbrella)
        basic.pause(ENCENDIDO_WS)
        pins.digitalWritePin(BOMBAAGUA_PIN, 0)
        ENCENDER_WS = 0
        basic.showIcon(IconNames.Asleep)
        basic.pause(5000)
        basic.clearScreen()
        basic.pause(APAGADO_WS)
    }
})
