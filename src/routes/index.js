const express = require('express')
const router = express.Router()
const s7 = require('../lib/s7')

router.get('/',(req,res)=>{
    res.redirect('/dashboard')
})

module.exports = router