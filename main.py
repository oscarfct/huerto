ENCENDER_WS = "on"
BOMBAAGUA_PIN = DigitalPin.P0
ENCENDIDO_WS = 5 * 60 * 1000
APAGADO_WS = 10 * 60 * 60 * 1000
TIEMPO_WS = "" + str(control.event_timestamp())

def on_button_pressed_b():
    basic.show_string("Temp:" + ("" + str(input.temperature())) + "ºC")
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    mostrar()    
forever(on_forever)

def onIn_background():
    while True:
            pins.digital_write_pin(BOMBAAGUA_PIN, 0)
            ENCENDER_WS = "on"
            basic.pause(ENCENDIDO_WS)
            pins.digital_write_pin(BOMBAAGUA_PIN, 1)
            ENCENDER_WS = "off"
            basic.pause(APAGADO_WS)
control.in_background(onIn_background)

def mostrar():
    if ENCENDER_WS == "on":
        basic.show_icon(IconNames.YES)
    else:
        basic.show_icon(IconNames.NO)