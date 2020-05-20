var snap7 = require('node-snap7')
var manage_config = require('./config')

const s7 = {}

var plcSettings = {
    name: "PLC-1200",
    host: '192.168.0.1',
    port: 102,
    rack: 0,
    slot: 1,
}



var s7client = new snap7.S7Client()

s7.cambiar_ip = function(nueva_ip){
    plcSettings.host = nueva_ip
}

s7.conectar = async () => {
    await manage_config.read()
    require('./estado-plc').num_prensas = manage_config.settings.press_count
    plcSettings.host = manage_config.settings.plc_ip
    return new Promise((resolve, reject) => {
        s7client.ConnectTo(plcSettings.host, plcSettings.rack, plcSettings.slot, (error) => {
            if (error) {
                console.error('Error en la conexion '+error)
                reject(error)
            }
            else {
                plcSettings.connected = true
                resolve(plcSettings)
            }
        })
    })
}


s7.desconectar = () => {
    return new Promise((resolve, reject) => {
        s7client.Disconnect()
        plcSettings.connected = false
        resolve(plcSettings)
    })
}

leer_coil = (area, posicion) => {
    return new Promise((resolve, reject) => {
        s7client.ReadArea(area, 0, Number(posicion), 1, 1, (err, data) => {
            if (err) {
                console.error('Error al leer coil '+err)
                reject(err)
            }
            else {
                resolve({ datos: data[0] })
            }
        })
    })
}

s7.leer_entrada = async (posicion) => {
    return await leer_coil(0x81, posicion)
}

s7.leer_salida = async (posicion) => {
    return await leer_coil(0x82, posicion)
}


s7client.Read

leer_db = (db, posicion, tam) => {
    return new Promise((resolve, reject) => {
        s7client.ReadArea(
            0x84
            , Number(db)
            , Number(posicion)
            , 1
            , tam, (err, data) => {
            if (err) {
                console.error(`Error al leer bloque ${db}, posicion ${posicion}, tamano ${tam}`)
                reject(err)
            }
            else {
                if(tam == 0x01){
                    resolve({ datos: data.readUInt8() })
                }
                else if(tam == 0x04){
                    resolve({ datos: data.readInt16BE() })
                }
                else if(tam == 0x06){
                    resolve({ datos: data.readInt32BE() })
                }
                else if(tam == 0x08){
                    resolve({ datos: data.readFloatBE() })
                }
            }
        })
    })
}

s7.escribir_db_bool = (db, posicion, valor) => {
    let buffer = null
    buffer = null
    if(valor == '1' ||valor == 'true'){
        buffer = new Buffer.from([0x01])
    }
    else{
        buffer = Buffer.from([0x00])
    }
    return new Promise((resolve, reject) => {
        s7client.WriteArea(0x84, Number(db), Number(posicion), 1, 0x01, buffer, async (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                try {
                    const result = await s7.leer_bool_db(db, posicion)
                    resolve(result)
                } catch (error) {
                    reject(err)
                }

            }
        })
    })
}

s7.escribir_db_int = (db, posicion, valor) => {
    let buffer = Buffer.alloc(2)
    buffer.writeInt16BE(Number(valor))
    return new Promise((resolve, reject) => {
        s7client.WriteArea(0x84, Number(db), Number(posicion), 1, 0x04, buffer, async (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                try {
                    const result = await s7.leer_int_db(db, posicion)
                    resolve(result)
                } catch (error) {
                    reject(err)
                }

            }
        })
    })
}

s7.escribir_db_long = (db, posicion, valor) => {
    let buffer = Buffer.alloc(4)
    buffer.writeInt32BE(Number(valor))

    return new Promise((resolve, reject) => {
        s7client.WriteArea(0x84, Number(db), Number(posicion), 1, 0x06, buffer, async (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                try {
                    const result = await s7.leer_long_db(db, posicion)
                    resolve(result)
                } catch (error) {
                    reject(err)
                }

            }
        })
    })
}

s7.escribir_db_real = (db, posicion, valor) => {
    let buffer = Buffer.alloc(6)
    buffer.writeFloatBE(Number(valor))
    console.log({buff: buffer})

    return new Promise((resolve, reject) => {
        s7client.WriteArea(0x84, Number(db), Number(posicion), 1, 0x08, buffer, async (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                try {
                    const result = await s7.leer_real_db(db, posicion)
                    resolve(result)
                } catch (error) {
                    reject(err)
                }

            }
        })
    })
}



s7.leer_bool_db = async (db, posicion) => {
    return await leer_db(db, posicion, 0x01)
}

s7.leer_int_db = async (db, posicion) => {
    return await leer_db(db, posicion, 0x04)
}

s7.leer_long_db = async (db, posicion) => {
    return await leer_db(db, posicion, 0x06)
}

s7.leer_real_db = async (db, posicion) => {
    return await leer_db(db, posicion, 0x08)
}

module.exports = s7
