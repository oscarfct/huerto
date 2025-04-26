let ENCENDER_WS = "on"
let BOMBAAGUA_PIN = DigitalPin.P0
let ENCENDIDO_WS = 5 * 60 * 1000
let APAGADO_WS = 10 * 60 * 60 * 1000
let TIEMPO_WS = "" + ("" + control.eventTimestamp())
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    basic.showString("Temp:" + ("" + ("" + input.temperature())) + "ºC")
})
forever(function on_forever() {
    mostrar()
})
control.inBackground(function onIn_background() {
    let ENCENDER_WS: string;
    while (true) {
        pins.digitalWritePin(BOMBAAGUA_PIN, 0)
        ENCENDER_WS = "on"
        basic.pause(ENCENDIDO_WS)
        pins.digitalWritePin(BOMBAAGUA_PIN, 1)
        ENCENDER_WS = "off"
        basic.pause(APAGADO_WS)
    }
})
function mostrar() {
    if (ENCENDER_WS == "on") {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    
}

