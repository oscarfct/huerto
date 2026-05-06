def mostrar():
    if ENCENDER_WS == 1:
        basic.show_icon(IconNames.UMBRELLA)
    else:
        basic.show_icon(IconNames.ASLEEP)
        basic.pause(5000)
ENCENDER_WS = 0
ENCENDER_WS = 1
BOMBAAGUA_PIN = DigitalPin.P0
ENCENDIDO_WS = 1 * 20 * 1000
APAGADO_WS = 10 * 60 * 60 * 1000

def on_forever():
    mostrar()
forever(on_forever)

def on_in_background():
    global ENCENDER_WS
    while True:
        pins.digital_write_pin(BOMBAAGUA_PIN, 1)
        ENCENDER_WS = 1
        basic.pause(ENCENDIDO_WS)
        pins.digital_write_pin(BOMBAAGUA_PIN, 0)
        ENCENDER_WS = 0
        basic.pause(APAGADO_WS)
control.in_background(on_in_background)
