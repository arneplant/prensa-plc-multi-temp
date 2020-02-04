variables = {
    num_prensas: 2,
    num_contadores: 3,
    bloque_activo: 1,
    bloque: {
        tipo: 'bool',
        posicion_1: 1, // bloque para prensa 1.1
        posicion_2: 1, // bloque para prensa 1.2
        posicion_3: 0, // bloque para prensa 2.1
        posicion_4: 0, // bloque para prensa 2.2
    },
    unida: {
        alias: '1PrensasUnidas',
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 1,
        posicion_2: 1,
        posicion_3: 1,
        posicion_4: 1,
    },

    ms_subida: {
        alias: '1msSubida',
        tipo: 'int',
        valor_1: 1300,
        valor_2: 1300,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 2,
        posicion_2: 2,
        posicion_3: 2,
        posicion_4: 2,
    },

    encendida: {
        alias: '1AEncendida',
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 5,
        posicion_2: 39,
        posicion_4: 7,
        posicion_5: 7,
    },

    modo: {
        alias: '1AModo',
        tipo: 'int',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 6,
        posicion_2: 40,
        posicion_3: 8,
        posicion_4: 8,
    },

    contador_1: {
        alias: '1AContador1',
        tipo: 'dint',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 8,
        posicion_2: 42,
        posicion_3: 0,
        posicion_4: 0,
    },
    contador_2: {
        alias: '1AContador2',
        tipo: 'dint',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 12,
        posicion_2: 46,
        posicion_3: 0,
        posicion_4: 0,
    },
    contador_3: {
        alias: '1AContadorDesc',
        tipo: 'dint',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 16,
        posicion_2: 50,
        posicion_4: 0,
        posicion_5: 0,
    },

    contador_4: {
        alias: '1AContadorT',
        tipo: 'dint',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 20,
        posicion_2: 6,
        posicion_4: 6,
        posicion_5: 6,
    },

    set_temperatura: {
        alias: '1ASetTemperatura',
        tipo: 'real',
        valor_1: 190,
        valor_2: 190,
        valor_3: 190,
        valor_4: 190,

        posicion_1: 24,
        posicion_2: 58,
        posicion_4: 6,
        posicion_5: 6,
    },

    desv_permitida: {
        alias: '1ADesvTempPermitida',
        tipo: 'int',
        valor_1: 99,
        valor_2: 99,
        valor_3: 99,
        valor_4: 99,

        posicion_1: 28,
        posicion_2: 62,
        posicion_4: 6,
        posicion_5: 6,
    },

    temperatura_actual: {
        alias: '1ATemperatura',
        tipo: 'real',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 30,
        posicion_2: 64,
        posicion_3: 0,
        posicion_4: 0,
    },

    temperatura_ok: {
        tipo: 'bool',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 0,
        posicion_2: 0,
        posicion_3: 0,
        posicion_4: 0,
    },

    set_segundos_ciclo: {
        alias: '1ASetSgCiclo',
        tipo: 'int',
        valor_1: 0,
        valor_2: 0,
        valor_3: 0,
        valor_4: 0,

        posicion_1: 36,
        posicion_2: 70,
        posicion_3: 0,
        posicion_4: 0,
    },

    unidas_3_4: {
        tipo: 'bool',
        valor: 0,
        posicion: 0
    },

    led_temp: {
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

ID_PRENSA_1 = prensa_aliases.id_prensa_1
ALIAS_PRENSA_1 = prensa_aliases.alias_prensa_1

ID_PRENSA_2 = prensa_aliases.id_prensa_2
ALIAS_PRENSA_2 = prensa_aliases.alias_prensa_3

bloque_global = ''