const express = require('express')
const router = express.Router()
const estado_plc = require('../lib/estado-plc')
const config = require('../lib/config')
const s7 = require('../lib/s7')

router.post('/leer_leds', (req, res) => {
    res.send([estado_plc.led_temp, estado_plc.led_emergencia, estado_plc.led_accion, estado_plc.led_barrera, estado_plc.led_cerrar, estado_plc.led_abrir])
})

router.post('/leer_temperaturas_contadores', (req, res) => {
    res.send([estado_plc.contador_1, estado_plc.contador_2, estado_plc.contador_3,
    estado_plc.set_temperatura, estado_plc.temperatura_actual, estado_plc.set_segundos_ciclo,estado_plc.encendida])
})

router.post('/encender_apagar_prensa', async (req, res) => {
    let nuevo_estado = estado_plc.encendida['valor_' + (req.body.id)] == 1 ? 'false' : 'true'
    try {
        await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.encendida['posicion_' + (req.body.id)], nuevo_estado)
    } catch (err) {
        res.status(500).send(err)
    }
    res.status(202).send('ok')
})

router.post('/cambiar_modo', async (req, res) => {
    try {
        await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.modo['posicion_' + (req.body.id)], Number(req.body.modo))
    } catch (err) {
        res.status(500).send(err)
    }
    res.status(202).send('ok')
})

router.post('/leer_estado_prensas', (req, res) => {
    res.send([estado_plc.encendida, estado_plc.set_temperatura, estado_plc.set_segundos_ciclo, estado_plc.modo])
})
router.post('/leer_config', (req, res) => {
    res.send([estado_plc.ms_subida, estado_plc.desv_permitida])
})

router.post('/separar_prensas', async (req, res) => {
    try {
        await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.unida['posicion_' + (req.body.id)], 'false')
        await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.unida['posicion_' + (Number(req.body.id) + 1)], 'false')
    } catch (err) {
        res.status(500).send(err)
    }
    res.status(202).send('ok')
})

router.post('/set_seg_ciclo', async (req, res) => {
    try {
        await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.set_segundos_ciclo['posicion_' + (req.body.id)], Number(req.body.valor))
    } catch (err) {
        res.status(500).send(err)
    }
    res.status(202).send('ok')
})


router.post('/set_temp_desviacion', async (req, res) => {
    try {
        await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.desv_permitida['posicion_' + (req.body.id)], Number(req.body.valor))
    } catch (err) {
        res.status(500).send(err)
    }
    res.status(202).send('ok')
})

router.post('/set_ms_subida', async (req, res) => {
    try {
        await s7.escribir_db_int(estado_plc.bloque_activo, estado_plc.ms_subida['posicion_' + (req.body.id)], Number(req.body.valor))
    } catch (err) {
        res.status(500).send(err)
    }
    res.status(202).send('ok')
})


router.post('/set_temperatura', async (req, res) => {
    try {
        await s7.escribir_db_real(estado_plc.bloque_activo, estado_plc.set_temperatura['posicion_' + (req.body.id)], Number(req.body.valor))
    } catch (err) {
        res.status(500).send(err)
    }
    res.status(202).send('ok')
})

router.post('/juntar_prensas', async (req, res) => {
    try {
        await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.unida['posicion_' + (req.body.id1)], 'true')
        await s7.escribir_db_bool(estado_plc.bloque_activo, estado_plc.unida['posicion_' + (req.body.id2)], 'true')
    } catch (err) {
        res.status(500).send(err)
    }
    res.status(202).send('ok')
})
router.post('/config/cambiar_ip', (req, res) => {
    config.cambiar_ip(req.body.ip1, req.body.ip2, req.body.ip3, req.body.ip4)
    res.status(202).send()
})

router.post('/config/cambiar_bloque', (req, res) => {
    config.cambiar_bloque(req.body.bloque)
    res.status(202).send()
})

module.exports = router