const express = require('express')
const router = express.Router()
const estado_plc = require('../lib/estado-plc')
const config = require('../lib/config')
const s7 = require('../lib/s7')

function check_encendido (req,res,next){
    if(estado_plc.conectado){
        return next()
    }
    else{
        return res.status(500).send('PLC Desconectado. Imposible actuar sobre variables.')
    }
}

router.post('/leer_leds', (req, res) => {
    res.send({ conectado: estado_plc.conectado, encender_extractor: estado_plc.encender_extractor.valor, data: [estado_plc.led_temp, estado_plc.led_emergencia, estado_plc.led_accion, estado_plc.led_barrera, estado_plc.led_cerrar, estado_plc.led_abrir] })
})

router.post('/leer_temperaturas_contadores', (req, res) => {
    res.send({
        conectado: estado_plc.conectado, encender_extractor: estado_plc.encender_extractor.valor, data: [estado_plc.saldos, estado_plc.set_contador_3, estado_plc.contador_1, estado_plc.contador_2, estado_plc.contador_3,
        estado_plc.set_temperatura, estado_plc.temperatura_actual, estado_plc.temperatura_ok, estado_plc.set_segundos_ciclo, estado_plc.encendida]
    })
})

router.post('/encender_apagar_prensa',check_encendido, async (req, res) => {
    let id_prensa = Number(req.body.id)
    let nuevo_estado = estado_plc.encendida['valor_' + id_prensa] == 1 ? 'false' : 'true'
    try {
        if (estado_plc.unida['valor_' + id_prensa] == 1) {
            if (id_prensa == 1 || id_prensa == 3) {
                await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.encendida['posicion_' + (id_prensa + 1)], nuevo_estado)
            }
        }
        await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.encendida['posicion_' + id_prensa], nuevo_estado)
        res.status(202).send('ok')
    } catch (err) {
        res.status(500).send(String(err))
    }
})

router.post('/cambiar_modo', check_encendido, async (req, res) => {
    let id_prensa = Number(req.body.id)
    try {
        if (estado_plc.unida['valor_' + id_prensa] == 1) {
            if (id_prensa == 1 || id_prensa == 3) {
                await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.modo['posicion_' + (id_prensa + 1)], Number(req.body.modo))
            }
        }
        await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.modo['posicion_' + (req.body.id)], Number(req.body.modo))
        res.status(202).send('ok')
    } catch (err) {
        res.status(500).send(String(err))
    }
})

router.post('/leer_estado_prensas', (req, res) => {
    res.send({ conectado: estado_plc.conectado, encender_extractor: estado_plc.encender_extractor.valor, data: [estado_plc.encendida, estado_plc.set_temperatura, estado_plc.temperatura_ok, estado_plc.set_segundos_ciclo, estado_plc.modo] })
})
router.post('/leer_config', (req, res) => {
    let control = []
    for(let i =1 ;i<=estado_plc.num_prensas;i++){
        control.push(estado_plc['control_calentamiento_'+i])
    }
    res.send({ conectado: estado_plc.conectado, encender_extractor: estado_plc.encender_extractor.valor
        , data: [estado_plc.ms_subida, estado_plc.desv_permitida], control: control })
})

router.post('/separar_prensas',check_encendido, async (req, res) => {
    try {
        await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.unida['posicion_' + (req.body.id)], 'false')
        await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.unida['posicion_' + (Number(req.body.id) + 1)], 'false')
    } catch (err) {
        res.status(500).send(String(err))
    }
    res.status(202).send('ok')
})

router.post('/set_seg_ciclo',check_encendido, async (req, res) => {
    let id_prensa = Number(req.body.id)

    try {
        if (estado_plc.unida['valor_' + id_prensa] == 1) {
            if (id_prensa == 1 || id_prensa == 3) {
                await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.set_segundos_ciclo['posicion_' + (id_prensa + 1)], Number(req.body.valor))
            }
        }
        await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.set_segundos_ciclo['posicion_' + (id_prensa)], Number(req.body.valor))
        res.status(202).send('ok')
    } catch (err) {
        res.status(500).send(String(err))
    }
})

router.post('/set_contador_3',check_encendido, async (req, res) => {
    try {
        await s7.escribir_db_long(estado_plc.bloque_activo, estado_plc['set_contador_3']['posicion_' + (req.body.id)], Number(req.body.valor))
        await s7.escribir_db_long(estado_plc.bloque_activo, estado_plc['contador_3']['posicion_' + (req.body.id)], Number(req.body.valor))

        res.status(202).send('ok')
    } catch (err) {
        console.error(err)
        res.status(500).send(String(err))
    }
})

router.post('/reset_contadores',check_encendido, async (req, res) => {
    try {
        await s7.escribir_db_long(estado_plc.bloque_activo, estado_plc['contador_1']['posicion_' + (req.body.id)], 0)
        await s7.escribir_db_long(estado_plc.bloque_activo, estado_plc['contador_2']['posicion_' + (req.body.id)], 0)
        await s7.escribir_db_long(estado_plc.bloque_activo, estado_plc['saldos']['posicion_' + (req.body.id)], 0)

        let valor_3 = estado_plc.contador_3['valor_' + (req.body.id)]
        let set_valor_3 = estado_plc.set_contador_3['valor_' + (req.body.id)]
        if (valor_3 < 0) {
            valor_3 += set_valor_3
        }
        else {
            valor_3 = set_valor_3
        }

        await s7.escribir_db_long(estado_plc.bloque_activo, estado_plc['contador_3']['posicion_' + (req.body.id)], valor_3)


    } catch (err) {
        res.status(500).send(String(err))
    }
})

router.post('/cambiar_saldos',check_encendido, async (req, res) => {
    try {
        let valor = estado_plc['saldos']['valor_' + (req.body.id)]
        if (req.body.sumar == 'true') {
            valor++
        }
        else {
            valor--
        }
        await s7.escribir_db_long(estado_plc.bloque_activo, estado_plc['saldos']['posicion_' + (req.body.id)], valor)
        res.sendStatus(200)
    } catch (err) {
        res.sendStatus(500)
    }
})

router.post('/set_temp_desviacion',check_encendido, async (req, res) => {
    try {
        await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.desv_permitida['posicion_' + (req.body.id)], Number(req.body.valor))
        res.status(202).send('ok')
    } catch (err) {
        res.status(500).send(String(err))
    }
})

router.post('/set_ms_subida',check_encendido, async (req, res) => {
    try {
        await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.ms_subida['posicion_' + (req.body.id)], Number(req.body.valor))
        res.status(202).send('ok')
    } catch (err) {
        res.status(500).send(String(err))
    }
})

router.post('/set_contador',check_encendido, async (req, res) => {
    try {
        
        await s7.escribir_db_long(estado_plc.bloque_activo, estado_plc['contador_' + req.body.contador]['posicion_' + (req.body.id)], Number(req.body.valor))
        res.status(202).send('ok')
    } catch (err) {
        console.log(err)
        res.status(500).send(String(err))
    }
})



router.post('/set_temperatura',check_encendido, async (req, res) => {
    let id_prensa = Number(req.body.id)

    try {
        if (estado_plc.unida['valor_' + id_prensa] == 1) {
            if (id_prensa == 1 || id_prensa == 3) {
                await s7.escribir_db_real(estado_plc.bloque_activo, estado_plc.set_temperatura['posicion_' + (id_prensa + 1)], Number(req.body.valor))
            }
        }
        await s7.escribir_db_real(estado_plc.bloque_activo, estado_plc.set_temperatura['posicion_' + id_prensa], Number(req.body.valor))
        res.status(202).send('ok')
    } catch (err) {
        res.status(500).send(String(err))
    }
})

router.post('/juntar_prensas',check_encendido, async (req, res) => {
    try {
        await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.unida['posicion_' + (req.body.id1)], 'true')
        await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.unida['posicion_' + (req.body.id2)], 'true')
        await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.modo['posicion_' + (req.body.id2)],estado_plc.modo['valor' + (req.body.id1)] )
        res.status(202).send('ok')
    } catch (err) {
        res.status(500).send(String(err))
    }
})


module.exports = router