const express = require('express')
const router = express.Router()
const estado_plc = require('../lib/estado-plc')

router.get('/',(req,res)=>{
    estado_plc.pagina_activa = 1
    res.render('dashboard/index',{num_prensas: estado_plc.num_prensas})
})

router.get('/edicion',(req,res)=>{
    const prensa = Number(req.query.prensa)
    const _prensas = []

    if(estado_plc.num_prensas == 3){
        _prensas.push({id: prensa, alias: `${prensa}. `})
        res.render('dashboard/edicion/edicion-separadas',{prensas:_prensas,unidas: 0})
    }
    else{
        let unida = Number(estado_plc.unida['valor_'+prensa])
        console.log("Solicita prensa: "+prensa+ " y esta unida: "+unida)
        if(unida == 1){
            if(prensa== 1 ||prensa == 2){
                //_prensas.push({id: 1, alias: '1.1 & 1.2  '})
                _prensas.push({id: 1, alias: '1.1  '})
                _prensas.push({id: 2, alias: '1.2  '})
            }
            else if(prensa == 3 || prensa == 4){
               // _prensas.push({id: 3, alias: '2.1 & 2.2  '})
                _prensas.push({id: 3, alias: '2.1  '})
                _prensas.push({id: 4, alias: '2.2  '})
            }
        }
        else{
            if(prensa == 1 || prensa == 2){
                _prensas.push({id: 1, alias: '1.1  '})
                _prensas.push({id: 2, alias: '1.2  '})
            }
            else if (prensa == 3 ||prensa == 4){
                _prensas.push({id: 3, alias: '2.1  '})
                _prensas.push({id: 4, alias: '2.2  '})
            }
        }
        res.render('dashboard/edicion/edicion-separadas',{prensas:_prensas,unidas: unida})
    }

    estado_plc.pagina_activa = 2

})


router.get('/configuracion',(req,res)=>{
    res.render('dashboard/configuracion/index',{separadas: ( estado_plc.num_prensas == 3?true:false), num_prensas: estado_plc.num_prensas})
    estado_plc.pagina_activa = 3

})

router.get('/admin',(req,res)=>{
    estado_plc.pagina_activa = 4
    res.render('dashboard/admin/index')
})

router.get('/admin/comunicacion',(req,res)=>{
    res.render('dashboard/admin/comunicacion')
})




module.exports = router