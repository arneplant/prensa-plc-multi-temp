const s7 = require('./s7')
const config = require('./config')

const variables = {
    lado: 0,
    num_prensas: 4,
    num_contadores: 3,
    pagina_activa: 1,
    bloque_activo: 1,
    conectado: false,
    conectando: false,
    control_calentamiento_1: {
        prensa: 1,
        tiempo_trans: 0,
        tiempo_trans_calentando: 0,
        tiempo_trans_apagada: 0,
        tiempo_trans_reposo: 0,
        estado_anterior: 0,
        reposo: 1,
    },
    control_calentamiento_2: {
        prensa: 2,
        tiempo_trans: 0,
        tiempo_trans_calentando: 0,
        tiempo_trans_apagada: 0,
        tiempo_trans_reposo: 0,
        estado_anterior: 0,
        reposo: 1,

    },
    control_calentamiento_3: {
        prensa: 3,
        tiempo_trans: 0,
        tiempo_trans_calentando: 0,
        tiempo_trans_apagada: 0,
        tiempo_trans_reposo: 0,
        estado_anterior: 0,
        reposo: 1,

    },
    control_calentamiento_4: {
        prensa: 4,
        tiempo_trans: 0,
        tiempo_trans_calentando: 0,
        tiempo_trans_apagada: 0,
        tiempo_trans_reposo: 0,
        estado_anterior: 0,
        reposo: 1,

    },
    bloque: {
        tipo: 'bool',
        posicion_1: 1, // bloque para prensa 1.1
        posicion_2: 1, // bloque para prensa 1.2
        posicion_3: 1, // bloque para prensa 2.1
        posicion_4: 1, // bloque para prensa 2.2
    },
    unida: {
        name: 'unida',
        alias: '1PrensasUnidas',
        tipo: 'bool',
        valor_1: 1,
        valor_2: 1,
        valor_3: 1,
        valor_4: 1,

        posicion_1: 1,
        posicion_2: 1,
        posicion_3: 73,
        posicion_4: 73,
    },

    ms_subida: {
        name: 'ms_subida',
        alias: '1msSubida',
        tipo: 'int',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 2,
        posicion_2: 2,
        posicion_3: 74,
        posicion_4: 74,
    },

    encendida: {
        name: 'encendida',
        alias: '1AEncendida',
        tipo: 'bool',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 4,
        posicion_2: 39,
        posicion_4: 76,
        posicion_5: 111,
    },

    modo: {
        name: 'modo',
        alias: '1AModo',
        tipo: 'int',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 6,
        posicion_2: 40,
        posicion_3: 78,
        posicion_4: 112,
    },

    contador_1: {
        name: 'contador_1',
        alias: '1AContador1',
        tipo: 'dint',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 8,
        posicion_2: 42,
        posicion_3: 0,
        posicion_4: 0,
    },
    contador_2: {
        name: 'contador_2',
        alias: '1AContador2',
        tipo: 'dint',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 12,
        posicion_2: 46,
        posicion_3: 0,
        posicion_4: 0,
    },
    contador_3: {
        name: 'contador_3',
        alias: '1AContadorDesc',
        tipo: 'dint',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 16,
        posicion_2: 50,
        posicion_4: 0,
        posicion_5: 0,
    },
    set_contador_3: {
        name: 'set_contador_3',
        alias: '',
        tipo: 'dint',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 16,
        posicion_2: 50,
        posicion_4: 0,
        posicion_5: 0,
    },
    saldos: {
        name: 'saldos',
        alias: '',
        tipo: 'dint',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 0,
        posicion_2: 0,
        posicion_4: 0,
        posicion_5: 0,
    },
    contador_total: {
        name: 'contador_4',
        alias: '1AContadorT',
        tipo: 'dint',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 20,
        posicion_2: 6,
        posicion_4: 6,
        posicion_5: 6,
    },

    set_temperatura: {
        name: 'set_temperatura',
        alias: '1ASetTemperatura',
        tipo: 'real',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 24,
        posicion_2: 58,
        posicion_4: 6,
        posicion_5: 6,
    },

    desv_permitida: {
        name: 'desv_permitida',
        alias: '1ADesvTempPermitida',
        tipo: 'int',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 28,
        posicion_2: 62,
        posicion_4: 6,
        posicion_5: 6,
    },

    temperatura_actual: {
        name: 'temperatura_actual',
        alias: '1ATemperatura',
        tipo: 'real',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,


        posicion_1: 30,
        posicion_2: 64,
        posicion_3: 0,
        posicion_4: 0,
    },

    set_temperatura_up:{
        name: 'set_temperatura_up',
        alias: '1ASetTemperaturaUp',
        tipo: 'real',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,
        posicion_1: 30,
        posicion_2: 64,
        posicion_3: 0,
        posicion_4: 0,
    },

    temperatura_actual_up:{
        name: 'temperatura_actual_up',
        alias: '1ATemperaturaUp',
        tipo: 'real',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,
        posicion_1: 30,
        posicion_2: 64,
        posicion_3: 0,
        posicion_4: 0,
    },
    temperatura_ok: {
        name: 'temperatura_ok',
        tipo: 'bool',
        valor_1: 1,
        valor_2: 1,
        valor_3: 1,
        valor_4: 1,

        posicion_1: 0,
        posicion_2: 0,
        posicion_3: 0,
        posicion_4: 0,
    },

    set_segundos_ciclo: {
        name: 'set_segundos_ciclo',
        alias: '1ASetSgCiclo',
        tipo: 'int',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 36,
        posicion_2: 70,
        posicion_3: 0,
        posicion_4: 0,
    },

    led_temp: {
        name: 'led_temp',
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 2,
        posicion_2: 5,
        posicion_4: 10,
        posicion_5: 10,
    },

    led_carga: {
        name: 'led_carga',
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 10,
        posicion_2: 10,
        posicion_4: 10,
        posicion_5: 10,
    },

    led_descarga: {
        name: 'led_descarga',
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 10,
        posicion_2: 10,
        posicion_4: 10,
        posicion_5: 10,
    },

    led_abrir: {
        name: 'led_abrir',
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 1,
        posicion_2: 4,
        posicion_4: 10,
        posicion_5: 10,
    },

    // salida
    led_cerrar: {
        name: 'led_cerrar',
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 0,
        posicion_2: 3,
        posicion_4: 10,
        posicion_5: 10,
    },

    // 0.0  0.2
    led_accion: {
        name: 'led_accion',
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 0,
        posicion_2: 2,
        posicion_4: 10,
        posicion_5: 10,
    },

    led_emergencia: {
        name: 'led_emergencia',
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 5,
        posicion_2: 5,
        posicion_4: 10,
        posicion_5: 10,
    },

    led_barrera: {
        name: 'led_barrera',
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 4,
        posicion_2: 4,
        posicion_4: 10,
        posicion_5: 10,
    },

    trabajando: {
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 10,
        posicion_2: 10,
        posicion_4: 10,
        posicion_5: 10,
    },

    // si está a 1: un mensaje de encender el extractor que salga cada x segundos y no sea bloqueante
    encender_extractor: {
        tipo: 'bool',
        valor: 0,
        posicion: 2305, // o 1809
    }
}
var prensa_aliases = {
    id_prensa_1: 1,
    alias_prensa_1: 'Press 1.1',

    id_prensa_2: 2,
    alias_prensa_2: 'Press 1.2',

    id_prensa_3: 3,
    alias_prensa_3: 'Press 2.1',

    id_prensa_4: 4,
    alias_prensa_4: 'Press 2.2',
}

const timer = ms => new Promise(res => setTimeout(res, ms));

function cambiar_lado_4x4(lado) {
    console.log("Cambiando lado a 4x4 " + lado)
    variables.encender_extractor.posicion = 2305

    variables.unida.posicion_1 = (lado == 0) ? 0 : 1153 // 1
    variables.unida.posicion_2 = (lado == 0) ? 0 : 1153
    variables.unida.posicion_3 = (lado == 0) ? 577 : 1729
    variables.unida.posicion_4 = (lado == 0) ? 577 : 1729

    variables.ms_subida.posicion_1 = (lado == 0) ? 2 : 146
    variables.ms_subida.posicion_2 = (lado == 0) ? 2 : 146
    variables.ms_subida.posicion_3 = (lado == 0) ? 74 : 218
    variables.ms_subida.posicion_4 = (lado == 0) ? 74 : 218

    variables.encendida.posicion_1 = (lado == 0) ? 32 : 1184 // 4
    variables.encendida.posicion_2 = (lado == 0) ? 305 : 1457 // 38.1
    variables.encendida.posicion_3 = (lado == 0) ? 608 : 1760
    variables.encendida.posicion_4 = (lado == 0) ? 881 : 2033

    variables.modo.posicion_1 = (lado == 0) ? 6 : 150
    variables.modo.posicion_2 = (lado == 0) ? 40 : 184
    variables.modo.posicion_3 = (lado == 0) ? 78 : 222
    variables.modo.posicion_4 = (lado == 0) ? 112 : 256

    variables.contador_1.posicion_1 = (lado == 0) ? 8 : 152
    variables.contador_1.posicion_2 = (lado == 0) ? 42 : 186
    variables.contador_1.posicion_3 = (lado == 0) ? 80 : 224
    variables.contador_1.posicion_4 = (lado == 0) ? 114 : 258

    variables.contador_2.posicion_1 = (lado == 0) ? 12 : 156
    variables.contador_2.posicion_2 = (lado == 0) ? 46 : 190
    variables.contador_2.posicion_3 = (lado == 0) ? 84 : 228
    variables.contador_2.posicion_4 = (lado == 0) ? 118 : 262

    variables.contador_3.posicion_1 = (lado == 0) ? 16 : 160
    variables.contador_3.posicion_2 = (lado == 0) ? 50 : 194
    variables.contador_3.posicion_3 = (lado == 0) ? 88 : 232
    variables.contador_3.posicion_4 = (lado == 0) ? 122 : 266

    variables.set_contador_3.posicion_1 = (lado == 0) ? 290 : 322
    variables.set_contador_3.posicion_2 = (lado == 0) ? 298 : 330
    variables.set_contador_3.posicion_3 = (lado == 0) ? 306 : 338
    variables.set_contador_3.posicion_4 = (lado == 0) ? 314 : 346

    variables.saldos.posicion_1 = (lado == 0) ? 294 : 326
    variables.saldos.posicion_2 = (lado == 0) ? 302 : 334
    variables.saldos.posicion_3 = (lado == 0) ? 310 : 342
    variables.saldos.posicion_4 = (lado == 0) ? 318 : 350

    variables.contador_total.posicion_1 = (lado == 0) ? 20 : 164
    variables.contador_total.posicion_2 = (lado == 0) ? 54 : 198
    variables.contador_total.posicion_3 = (lado == 0) ? 92 : 236
    variables.contador_total.posicion_4 = (lado == 0) ? 126 : 270

    variables.set_temperatura.posicion_1 = (lado == 0) ? 24 : 168
    variables.set_temperatura.posicion_2 = (lado == 0) ? 58 : 202
    variables.set_temperatura.posicion_3 = (lado == 0) ? 96 : 240
    variables.set_temperatura.posicion_4 = (lado == 0) ? 130 : 274

    variables.set_temperatura_up.posicion_1 = (lado == 0) ? 364 : 404
    variables.set_temperatura_up.posicion_2 = (lado == 0) ? 374 : 414
    variables.set_temperatura_up.posicion_3 = (lado == 0) ? 384 : 424
    variables.set_temperatura_up.posicion_4 = (lado == 0) ? 394 : 434

    variables.desv_permitida.posicion_1 = (lado == 0) ? 28 : 172
    variables.desv_permitida.posicion_2 = (lado == 0) ? 62 : 206
    variables.desv_permitida.posicion_3 = (lado == 0) ? 100 : 244
    variables.desv_permitida.posicion_4 = (lado == 0) ? 134 : 278

    variables.temperatura_actual.posicion_1 = (lado == 0) ? 30 : 174
    variables.temperatura_actual.posicion_2 = (lado == 0) ? 64 : 208
    variables.temperatura_actual.posicion_3 = (lado == 0) ? 102 : 246
    variables.temperatura_actual.posicion_4 = (lado == 0) ? 136 : 280

    variables.temperatura_actual_up.posicion_1 = (lado == 0) ? 368 : 408
    variables.temperatura_actual_up.posicion_2 = (lado == 0) ? 378 : 418
    variables.temperatura_actual_up.posicion_3 = (lado == 0) ? 388 : 428
    variables.temperatura_actual_up.posicion_4 = (lado == 0) ? 398 : 438

    variables.temperatura_ok.posicion_1 = (lado == 0) ? 272 : 1424
    variables.temperatura_ok.posicion_2 = (lado == 0) ? 544 : 1696
    variables.temperatura_ok.posicion_3 = (lado == 0) ? 848 : 2000
    variables.temperatura_ok.posicion_4 = (lado == 0) ? 1120 : 2272

    variables.set_segundos_ciclo.posicion_1 = (lado == 0) ? 36 : 180
    variables.set_segundos_ciclo.posicion_2 = (lado == 0) ? 70 : 214
    variables.set_segundos_ciclo.posicion_3 = (lado == 0) ? 108 : 252
    variables.set_segundos_ciclo.posicion_4 = (lado == 0) ? 142 : 286

    variables.trabajando.posicion_1 = (lado == 0) ? 38 : 182
    variables.trabajando.posicion_2 = (lado == 0) ? 72 : 216
    variables.trabajando.posicion_3 = (lado == 0) ? 110 : 254
    variables.trabajando.posicion_4 = (lado == 0) ? 144 : 288

    variables.led_abrir.posicion_1 = (lado == 0) ? 0 : 18
    variables.led_abrir.posicion_2 = (lado == 0) ? 3 : 21
    variables.led_abrir.posicion_3 = (lado == 0) ? 6 : 24
    variables.led_abrir.posicion_4 = (lado == 0) ? 9 : 27

    variables.led_cerrar.posicion_1 = (lado == 0) ? 1 : 19
    variables.led_cerrar.posicion_2 = (lado == 0) ? 4 : 22
    variables.led_cerrar.posicion_3 = (lado == 0) ? 7 : 25
    variables.led_cerrar.posicion_4 = (lado == 0) ? 16 : 28

    variables.led_temp.posicion_1 = (lado == 0) ? 2 : 20
    variables.led_temp.posicion_2 = (lado == 0) ? 5 : 23
    variables.led_temp.posicion_3 = (lado == 0) ? 8 : 26
    variables.led_temp.posicion_4 = (lado == 0) ? 17 : 29

    variables.led_barrera.posicion_1 = (lado == 0) ? 4 : 18
    variables.led_barrera.posicion_2 = (lado == 0) ? 4 : 18
    variables.led_barrera.posicion_3 = (lado == 0) ? 10 : 24//16
    variables.led_barrera.posicion_4 = (lado == 0) ? 10 : 24//16

    variables.led_emergencia.posicion_1 = (lado == 0) ? 5 : 19
    variables.led_emergencia.posicion_2 = (lado == 0) ? 5 : 19
    variables.led_emergencia.posicion_3 = (lado == 0) ? 11 : 25
    variables.led_emergencia.posicion_4 = (lado == 0) ? 11 : 25

    variables.led_accion.posicion_1 = (lado == 0) ? 0 : 12
    variables.led_accion.posicion_2 = (lado == 0) ? 2 : 16
    variables.led_accion.posicion_3 = (lado == 0) ? 6 : 20//18
    variables.led_accion.posicion_4 = (lado == 0) ? 8 : 22
}

function cambiar_lado_3x3(lado) {
    console.log("Cambiando lado a " + lado)
    variables.encender_extractor.posicion = 1809
    variables.ms_subida.posicion_1 = (lado == 0) ? 0 : 114
    variables.ms_subida.posicion_2 = (lado == 0) ? 38 : 152
    variables.ms_subida.posicion_3 = (lado == 0) ? 76 : 190

    variables.encendida.posicion_1 = (lado == 0) ? 16 : 928 // 4
    variables.encendida.posicion_2 = (lado == 0) ? 320 : 1232 // 38.1
    variables.encendida.posicion_3 = (lado == 0) ? 624 : 1536

    variables.modo.posicion_1 = (lado == 0) ? 4 : 118
    variables.modo.posicion_2 = (lado == 0) ? 42 : 156
    variables.modo.posicion_3 = (lado == 0) ? 80 : 194

    variables.contador_1.posicion_1 = (lado == 0) ? 6 : 120
    variables.contador_1.posicion_2 = (lado == 0) ? 44 : 158
    variables.contador_1.posicion_3 = (lado == 0) ? 82 : 196

    variables.contador_2.posicion_1 = (lado == 0) ? 10 : 124
    variables.contador_2.posicion_2 = (lado == 0) ? 48 : 162
    variables.contador_2.posicion_3 = (lado == 0) ? 86 : 200

    variables.contador_3.posicion_1 = (lado == 0) ? 14 : 128
    variables.contador_3.posicion_2 = (lado == 0) ? 52 : 166
    variables.contador_3.posicion_3 = (lado == 0) ? 90 : 204

    variables.set_contador_3.posicion_1 = (lado == 0) ? 228 : 252
    variables.set_contador_3.posicion_2 = (lado == 0) ? 236 : 260
    variables.set_contador_3.posicion_3 = (lado == 0) ? 244 : 268

    variables.saldos.posicion_1 = (lado == 0) ? 232 : 256
    variables.saldos.posicion_2 = (lado == 0) ? 240 : 264
    variables.saldos.posicion_3 = (lado == 0) ? 248 : 272

    variables.contador_total.posicion_1 = (lado == 0) ? 18 : 132
    variables.contador_total.posicion_2 = (lado == 0) ? 56 : 170
    variables.contador_total.posicion_3 = (lado == 0) ? 94 : 208

    variables.set_temperatura.posicion_1 = (lado == 0) ? 22 : 136
    variables.set_temperatura.posicion_2 = (lado == 0) ? 60 : 174
    variables.set_temperatura.posicion_3 = (lado == 0) ? 98 : 212

    variables.desv_permitida.posicion_1 = (lado == 0) ? 26 : 140
    variables.desv_permitida.posicion_2 = (lado == 0) ? 64 : 178
    variables.desv_permitida.posicion_3 = (lado == 0) ? 102 : 216

    variables.temperatura_actual.posicion_1 = (lado == 0) ? 28 : 142
    variables.temperatura_actual.posicion_2 = (lado == 0) ? 66 : 180
    variables.temperatura_actual.posicion_3 = (lado == 0) ? 104 : 218

    variables.temperatura_ok.posicion_1 = (lado == 0) ? 256 : 1168
    variables.temperatura_ok.posicion_2 = (lado == 0) ? 560 : 1472
    variables.temperatura_ok.posicion_3 = (lado == 0) ? 864 : 1776


    variables.set_segundos_ciclo.posicion_1 = (lado == 0) ? 34 : 148
    variables.set_segundos_ciclo.posicion_2 = (lado == 0) ? 72 : 186
    variables.set_segundos_ciclo.posicion_3 = (lado == 0) ? 110 : 224

    variables.trabajando.posicion_1 = (lado == 0) ? 288 : 1200
    variables.trabajando.posicion_2 = (lado == 0) ? 592 : 1504
    variables.trabajando.posicion_3 = (lado == 0) ? 896 : 1808


    // output
    variables.led_abrir.posicion_1 = (lado == 0) ? 25 : 28
    variables.led_abrir.posicion_2 = (lado == 0) ? 26 : 29
    variables.led_abrir.posicion_3 = (lado == 0) ? 27 : 30


    // output
    variables.led_cerrar.posicion_1 = (lado == 0) ? 17 : 20
    variables.led_cerrar.posicion_2 = (lado == 0) ? 18 : 21
    variables.led_cerrar.posicion_3 = (lado == 0) ? 19 : 22

    // output
    variables.led_temp.posicion_1 = (lado == 0) ? 1 : 4
    variables.led_temp.posicion_2 = (lado == 0) ? 2 : 5
    variables.led_temp.posicion_3 = (lado == 0) ? 3 : 6

    // input
    variables.led_barrera.posicion_1 = (lado == 0) ? 3 : 17
    variables.led_barrera.posicion_2 = (lado == 0) ? 7 : 21
    variables.led_barrera.posicion_3 = (lado == 0) ? 11 : 25

    // input
    variables.led_emergencia.posicion_1 = (lado == 0) ? 6 : 16
    variables.led_emergencia.posicion_2 = (lado == 0) ? 6 : 20
    variables.led_emergencia.posicion_3 = (lado == 0) ? 10 : 24

    // input
    variables.led_accion.posicion_1 = (lado == 0) ? 1 : 13
    variables.led_accion.posicion_2 = (lado == 0) ? 5 : 19
    variables.led_accion.posicion_3 = (lado == 0) ? 9 : 23
}

// lado 0: 1.1 1.2 y 2.1 2.2
// lado 1: 3.1 3.2 y 4.1 4.2
variables.cambiar_lado = cambiar_lado_4x4

variables.cambiar_num_prensas = function (num_prensas) {
    variables.num_prensas = num_prensas
    if (num_prensas == 3) {
        variables.cambiar_lado = cambiar_lado_3x3
    }
    else if (num_prensas == 4) {
        variables.cambiar_lado = cambiar_lado_4x4
    }
}

// leo la configuracion y cargo el lado correspondiente
config.read().then(_ => {
    console.log("Configurando en lado: " + config.settings.block)
    console.log("Numero de prensas: " + config.settings.press_count)

    variables.cambiar_num_prensas(config.settings.press_count)
    variables.cambiar_lado(config.settings.block)
}).catch((err) => { throw err; console.log("Error al leer lado " + err) })

let i = 0
variables.conectando = false
variables.conectado = false

variables.conectando = true
console.error("\nError en lectura del PLC. Desconectando PLC...")
s7.desconectar()
timer(3000).then(async _ => {
    console.log("Desconectado correctamente. Conectando...")
    try {
        await s7.conectar()
    } catch (err) { }
    timer(3000).then(async _ => {
        variables.conectando = false
        variables.conectado = true
    })
});

const milisegundos_actualizacion = 1500

setInterval(async () => {
    if (variables.conectando) return
    try {

        for (let i = 1; i <= variables.num_prensas; i++) {
            await leer_control_calentamiento(i)

            if (variables.pagina_activa == 1) {
                await leer_temperaturas(i)
                await leer_contadores(i)
                if (variables.num_prensas == 4) {
                    await leer_unida(i)
                }
                await leer_segundos_ciclo(i)
                await leer_encendida(i)
                await leer_extractor()
                await leer_saldos(i)
            }
            else if (variables.pagina_activa == 2) {
                await leer_temperaturas(i)
                await leer_segundos_ciclo(i)
                if (variables.num_prensas == 4) {
                    await leer_unida(i)
                } await leer_encendida(i)
                await leer_modos(i)
                await leer_extractor()
            }
            else if (variables.pagina_activa == 3) {
                await leer_config(i)
                await leer_extractor()
            }
            else if (variables.pagina_activa == 4) {
                await leer_leds(i)
                await leer_extractor()
            }
        }
        variables.conectado = true

    } catch (ex) {
        if (!variables.conectando) {
            variables.conectado = false
            variables.conectando = true
            console.error(`\nError en lectura del PLC. Desconectando PLC... ${ex}`)
            s7.desconectar()
            timer(3000).then(async _ => {
                console.log("Desconectado correctamente. Conectando...")
                try {
                    await s7.conectar()
                } catch (err) {

                }

                timer(3000).then(_ => {
                    variables.conectando = false
                    //conectado = true

                }).catch(_ => { console.error('error then') })
            }).catch(_ => { console.error('error then') });
        }

    }
}, milisegundos_actualizacion)

const limite_tiempo_control_calentamiento = 900 * 1000

async function leer_control_calentamiento(i) {
    let actual = variables.led_temp['valor_' + i] = (await s7.leer_salida(variables.led_temp['posicion_' + i])).datos
    let anterior = variables['control_calentamiento_' + i].estado_anterior

    if (anterior == 1 && actual == 0) {
        variables['control_calentamiento_' + i].tiempo_trans_reposo += 1
        variables['control_calentamiento_' + i].tiempo_trans += 1
    }
    else if (anterior == 0 && actual == 1) {
        if (variables['control_calentamiento_' + i].reposo == 1) {
            variables['control_calentamiento_' + i].reposo = 0
            variables['control_calentamiento_' + i].tiempo_trans = 0
        }

        variables['control_calentamiento_' + i].tiempo_trans_reposo = 0
        variables['control_calentamiento_' + i].tiempo_trans += 1
    }
    else if (anterior == 0 && actual == 0) {
        if (variables['control_calentamiento_' + i].tiempo_trans_reposo * milisegundos_actualizacion
            > limite_tiempo_control_calentamiento) {
            variables['control_calentamiento_' + i].reposo = 1
        }
        else {
            variables['control_calentamiento_' + i].tiempo_trans++
            variables['control_calentamiento_' + i].tiempo_trans_reposo++
        }
    }
    else if (anterior == 1 && actual == 1) {
        variables['control_calentamiento_' + i].tiempo_trans += 1
    }

    variables['control_calentamiento_' + i].estado_anterior = actual

    /*     mientras que 1==1:
        si anterior == 1 y actual == 0:
            tiemporeposo++
            tiempo++
        si_no si anterior == 0 y actual == 1:
            si reposo == 1:
                reposo = 0
                tiempo=0
            tiemporeposo = 0
            tiempo++
        si_no si anterior == 0 y actual == 0:
            si tiemporeposo > 15 min:
                reposo = 1
            si_no:
                tiempo++
                tiemporeposo++
        si_no si anterior == 1 y actual == 1:
            tiempo++ */
}

async function leer_saldos(i) {
    variables.saldos['valor_' + i] = (await s7.leer_long_db(variables.bloque_activo, variables.saldos['posicion_' + i])).datos
}

async function leer_extractor() {
    variables.encender_extractor['valor'] = (await s7.leer_bool_db(variables.bloque_activo, variables.encender_extractor['posicion'])).datos
}

async function leer_modos(i) {
    variables.modo['valor_' + i] = (await s7.leer_int_db(variables.bloque_activo, variables.modo['posicion_' + i])).datos
}

async function leer_unida(i) {
    variables.unida['valor_' + i] = (await s7.leer_bool_db(variables.bloque_activo, variables.unida['posicion_' + i])).datos
}

async function leer_encendida(i) {
    variables.encendida['valor_' + i] = (await s7.leer_bool_db(variables.bloque_activo, variables.encendida['posicion_' + i])).datos
}

async function leer_leds(i) {
    variables.led_emergencia['valor_' + i] = (await s7.leer_entrada(variables.led_emergencia['posicion_' + i])).datos
    variables.led_accion['valor_' + i] = (await s7.leer_entrada(variables.led_accion['posicion_' + i])).datos
    variables.led_barrera['valor_' + i] = (await s7.leer_entrada(variables.led_barrera['posicion_' + i])).datos
    variables.led_temp['valor_' + i] = (await s7.leer_salida(variables.led_temp['posicion_' + i])).datos
    variables.led_abrir['valor_' + i] = (await s7.leer_salida(variables.led_abrir['posicion_' + i])).datos
    variables.led_cerrar['valor_' + i] = (await s7.leer_salida(variables.led_cerrar['posicion_' + i])).datos
}

async function leer_config(i) {
    variables.desv_permitida['valor_' + i] = (await s7.leer_int_db(variables.bloque_activo, variables.desv_permitida['posicion_' + i])).datos
    variables.ms_subida['valor_' + i] = (await s7.leer_int_db(variables.bloque_activo, variables.ms_subida['posicion_' + i])).datos
}

async function leer_contadores(i) {
    for (let j = 1; j <= variables.num_contadores; j++) {
        let contador = variables['contador_' + j]
        contador['valor_' + i] = (await s7.leer_long_db(variables.bloque_activo, contador['posicion_' + i])).datos
    }
    variables.set_contador_3['valor_' + i] = (await s7.leer_long_db(variables.bloque_activo, variables.set_contador_3['posicion_' + i])).datos
}

async function leer_segundos_ciclo(i) {
    variables.set_segundos_ciclo['valor_' + i] = (await s7.leer_int_db(variables.bloque_activo, variables.set_segundos_ciclo['posicion_' + i])).datos
}

async function leer_temperaturas(i) {
    variables.temperatura_actual['valor_' + i] = Math.round((await s7.leer_real_db(variables.bloque_activo, variables.temperatura_actual['posicion_' + i])).datos * 100) / 100
    variables.temperatura_actual_up['valor_' + i] = Math.round(((await s7.leer_real_db(variables.bloque_activo, variables.temperatura_actual_up['posicion_' + i])).datos / 10.0)  * 10)/ 10
    variables.set_temperatura_up['valor_' + i] = (await s7.leer_real_db(variables.bloque_activo, variables.set_temperatura_up['posicion_' + i])).datos
    variables.set_temperatura['valor_' + i] = (await s7.leer_real_db(variables.bloque_activo, variables.set_temperatura['posicion_' + i])).datos
    variables.temperatura_ok['valor_' + i] = (await s7.leer_bool_db(variables.bloque_activo, variables.temperatura_ok['posicion_' + i])).datos
}

module.exports = variables
