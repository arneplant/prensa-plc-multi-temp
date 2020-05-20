const express = require('express')
const router = express.Router()
const config = require('../lib/config')

router.post('/leer_config', async (req, res) => {
    try {
        await config.read()
    } catch (err) {
        res.status(500).send(err)
    }
    res.status(200).send(config.settings)
})

router.post('/cambiar_ip', (req, res) => {
    console.log(req.body)
    config.cambiar_ip(req.body.ip1, req.body.ip2, req.body.ip3, req.body.ip4)
    res.status(202).send()
})

router.post('/cambiar_bloque', (req, res) => {
    config.cambiar_bloque(req.body.bloque)
    res.status(202).send()
})

router.post('/cambiar_num_prensas',(req,res)=>{
    config.cambiar_num_prensas(req.body.num_prensas)
    res.status(202).send()
})


module.exports = router