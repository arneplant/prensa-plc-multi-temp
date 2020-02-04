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


module.exports = router