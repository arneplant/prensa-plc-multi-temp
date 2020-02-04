GET('/config', (data,err) => {
    if(data){
        let troceado = data.plc_ip.split('.')
        if (troceado.length == 4) {
            ip1.value = troceado[0]
            ip2.value = troceado[1]
            ip3.value = troceado[2]
            ip4.value = troceado[3]
    
            actualizar_botones(data.block)
        }
    }
    else{
        console.log('Error al traer config')
    }
    
})

function cambiar_ip() {
    let mi_url = '/config/ip' + '/' + ip1.value + '/' + ip2.value + '/' + ip3.value + '/' + ip4.value
    GET(mi_url, (data,err)=>{
        if(data){
            console.log("IP cambiada")
        }
        else{
            console.log("Error al cambiar ip")
        }
    })
}

function actualizar_botones(bloque) {
    bloque_global = bloque
    switch (bloque) {
        case 'A':
            btnA.className = 'btn btn-success btn-menu'
            btnB.className = 'btn btn-danger btn-menu'
            break
        case 'B':
            btnB.className = 'btn btn-success btn-menu'
            btnA.className = 'btn btn-danger btn-menu'
            break
       
        default:
            break
    }
}

function cambiar_bloque(elemento, bloque) {
    actualizar_botones(bloque)
    GET('/config/bloque' + '/' + bloque, (data,err)=>{
        if(data){
            console.log("Bloque cambiado")
        }
        else{
            console.log("Error al cambiar bloque")
        }
    })
}


