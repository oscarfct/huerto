let ENCENDER_WS = 1
let BOMBAAGUA_PIN = DigitalPin.P0
let ENCENDIDO_WS = 1 * 60 * 1000
let APAGADO_WS = 6 * 60 * 60 * 1000
datalogger.setColumnTitles(
"temperatura",
"luz"
)
datalogger.includeTimestamp(FlashLogTimeStampFormat.Hours)
control.inBackground(function () {
    while (true) {
        pins.digitalWritePin(BOMBAAGUA_PIN, 1)
        ENCENDER_WS = 1
        datalogger.log(
        datalogger.createCV("luz", input.lightLevel()),
        datalogger.createCV("temperatura", input.temperature())
        )
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
