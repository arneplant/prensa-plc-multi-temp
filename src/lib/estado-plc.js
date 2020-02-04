
const s7 = require('./s7')


variables = {
    num_prensas: 2,
    num_contadores: 3,
    pagina_activa: 0,
    bloque_activo: 1,
    bloque: {
        tipo: 'bool',
        posicion_1: 1, // bloque para prensa 1.1
        posicion_2: 1, // bloque para prensa 1.2
        posicion_3: 0, // bloque para prensa 2.1
        posicion_4: 0, // bloque para prensa 2.2
    },
    unida: {
        name: 'unida',
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
        name:'ms_subida',
        alias: '1msSubida',
        tipo: 'int',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 2,
        posicion_2: 2,
        posicion_3: 2,
        posicion_4: 2,
    },

    encendida: {
        name: 'encendida',
        alias: '1AEncendida',
        tipo: 'bool',
        valor_1: -1,
        valor_2: -1,
        valor_3: -1,
        valor_4: -1,

        posicion_1: 5,
        posicion_2: 39,
        posicion_4: 7,
        posicion_5: 7,
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
        posicion_3: 8,
        posicion_4: 8,
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

    contador_4: {
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

    temperatura_ok: {
        name: 'temperatura_ok',
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

    unidas_3_4: {
        tipo: 'bool',
        valor: 0,
        posicion: 0
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


let i = 0
let conectando = false
let conectado = false

conectando = true
console.log("Error en lectura del PLC. Desconectando PLC...")
s7.desconectar()
timer(3000).then(async _ => {
    console.log("Desconectado correctamente. Conectando...")
    s7.conectar()
    timer(3000).then(async _ => {
        console.log("Conectado correctamente")
        conectando = false
        conectado = true
    })
});

setInterval(async () => {
    if (conectando || !conectado) return
    try {
        for (let i = 1; i <= variables.num_prensas; i++) {
            if (variables.pagina_activa == 1 ) {
                await leer_temperaturas(i)
                await leer_contadores(i)
                await leer_segundos_ciclo(i)
                await leer_encendida(i)
            }
            else if(variables.pagina_activa == 2){
                await leer_temperaturas(i)
                await leer_segundos_ciclo(i)
                await leer_unida(i)
                await leer_encendida(i)
                await leer_modos(i)
            }
            else if(variables.pagina_activa == 3){
                await leer_config(i)
            }
            else if (variables.pagina_activa == 4) {
                await leer_leds(i)
            }
        }

    } catch (ex) {
        if (!conectando) {
            conectado = false
            conectando = true
            console.log("Error en lectura del PLC. Desconectando PLC...")
            s7.desconectar()
            timer(3000).then(_ => {
                console.log("Desconectado correctamente. Conectando...")
                s7.conectar()
                timer(3000).then(_ => {
                    console.log("Conectado correctamente")
                    conectando = false
                    conectado = true
                })
            });
        }

    }
    //console.log("ejecucion " + (++i))
}, 300)

async function leer_modos(i){
    variables.modo['valor_' + i] = (await s7.leer_int_db(variables.bloque_activo,variables.modo['posicion_' + i])).datos
}

async function leer_unida(i){
    variables.unida['valor_' + i] = (await s7.leer_bool_db(variables.bloque_activo,variables.unida['posicion_' + i])).datos
}

async function leer_encendida(i){
    variables.encendida['valor_' + i] = (await s7.leer_bool_db(variables.bloque_activo,variables.encendida['posicion_' + i])).datos

}

async function leer_leds(i) {
    variables.led_emergencia['valor_' + i] = (await s7.leer_entrada(variables.led_emergencia['posicion_' + i])).datos
    variables.led_accion['valor_' + i] = (await s7.leer_entrada(variables.led_accion['posicion_' + i])).datos
    variables.led_barrera['valor_' + i] = (await s7.leer_entrada(variables.led_barrera['posicion_' + i])).datos
    variables.led_temp['valor_' + i] = (await s7.leer_salida(variables.led_temp['posicion_' + i])).datos
    variables.led_abrir['valor_' + i] = (await s7.leer_salida(variables.led_abrir['posicion_' + i])).datos
    variables.led_cerrar['valor_' + i] = (await s7.leer_salida(variables.led_cerrar['posicion_' + i])).datos
}

async function leer_config(i){
    variables.desv_permitida['valor_'+i] = (await s7.leer_int_db(variables.bloque_activo, variables.desv_permitida['posicion_'+i])).datos
    variables.ms_subida['valor_'+i] = (await s7.leer_int_db(variables.bloque_activo, variables.ms_subida['posicion_'+i])).datos
}

async function leer_contadores(i) {
    for (let j = 1; j <= variables.num_contadores; j++) {
        let contador = variables['contador_' + j]
        contador['valor_' + i] = (await s7.leer_long_db(variables.bloque_activo, contador['posicion_' + i])).datos
    }
}

async function leer_segundos_ciclo(i){
    variables.set_segundos_ciclo['valor_'+i] = (await s7.leer_int_db(variables.bloque_activo, variables.set_segundos_ciclo['posicion_'+i])).datos
}

async function leer_temperaturas(i) {
    variables.temperatura_actual['valor_' + i] = (await s7.leer_real_db(variables.bloque_activo, variables.temperatura_actual['posicion_' + i])).datos
    variables.set_temperatura['valor_' + i] = (await s7.leer_real_db(variables.bloque_activo, variables.set_temperatura['posicion_' + i])).datos
}

module.exports = variables
