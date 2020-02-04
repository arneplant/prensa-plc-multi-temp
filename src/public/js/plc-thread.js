function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
desconectar((data, err) => {
    sleep(2000)
    conectar((data2, err2) => {
        if (data2) {
            console.log(data2)
        }
        else {
            console.log(err2)
        }
    })
})
// espero a que conecte

sleep(3000)

var task = setInterval(funcion_principal, 200)

var deshabilitado = false

function bloquear_interfaz() {
    if (!deshabilitado) {
        btn_juntar.classList.add('disabled')
        btn_separar.classList.add('disabled')
        prensas_separadas.classList.add('disabled')
        prensas_juntas.classList.add('disabled')
        parametros_prensas.classList.add('disabled')

        deshabilitado = true
    }
}

function desbloquear_interfaz() {
    if (deshabilitado) {
        btn_juntar.classList.remove('disabled')
        btn_separar.classList.remove('disabled')
        prensas_separadas.classList.remove('disabled')
        prensas_juntas.classList.remove('disabled')
        parametros_prensas.classList.remove('disabled')

        deshabilitado = false
    }
}

async function funcion_principal() {

    // leer de plc
    leer_contadores()
    leer_temperaturas()
    leer_minutos()
    leer_encendidas()
    leer_unidas()
    leer_modo()
    leer_ms_subida()
    leer_desv_permitida()
    leer_entradas_salidas()


    // escribir en interfaz
    escribir_contadores()
    escribir_temperaturas()
    escribir_minutos()
    escribir_configuracion()
    escribir_entradas_salidas()

    // pintar colores
    pintar_botones()
}

function leer_entradas_salidas() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        leer_salida(variables.led_temp['posicion_' + i], (data, err) => {
            if (data) {
                variables.led_temp['valor_' + i] = data.datos
            }
        })
        leer_salida(variables.led_abrir['posicion_' + i], (data, err) => {
            if (data) {
                variables.led_abrir['valor_' + i] = data.datos
            }
        })
        leer_salida(variables.led_cerrar['posicion_' + i], (data, err) => {
            if (data) {
                variables.led_cerrar['valor_' + i] = data.datos
            }
        })
        leer_entrada(variables.led_accion['posicion_' + i], (data, err) => {
            if (data) {
                variables.led_accion['valor_' + i] = data.datos
            }
        })
        leer_entrada(variables.led_emergencia['posicion_' + i], (data, err) => {
            if (data) {
                variables.led_emergencia['valor_' + i] = data.datos
            }
        })
        leer_entrada(variables.led_barrera['posicion_' + i], (data, err) => {
            if (data) {
                variables.led_barrera['valor_' + i] = data.datos
            }
        })
    }
}

function escribir_entradas_salidas() {
    let cabeceras_filas = ['Temperature' /*, 'Upload Press', 'Download Press'*/, 'Open Press', 'Close Press',
        'Action Button', 'Emergency Button', 'Photoelectric Barrier']

    for (cabecera of cabeceras_filas) {
        for (let i = 1; i <= variables.num_prensas; i++) {
            let led = document.getElementById(cabecera + '_' + i)
            if (led != null) {
                switch (cabecera) {
                    case 'Temperature':
                        if(variables.led_temp['valor_'+i]==1){
                            led.className = led.className.replace("fa-circle-o ","fa-circle ")
                        }else{
                            led.className = led.className.replace("fa-circle ","fa-circle-o ")
                        }
                        break
                    case 'Open Press':
                        if(variables.led_abrir['valor_'+i]==1){
                            led.className = led.className.replace("fa-circle-o ","fa-circle ")
                        }else{
                            led.className = led.className.replace("fa-circle ","fa-circle-o ")
                        }
                        break
                    case 'Close Press':
                        if(variables.led_cerrar['valor_'+i]==1){
                            led.className = led.className.replace("fa-circle-o ","fa-circle ")
                        }else{
                            led.className = led.className.replace("fa-circle ","fa-circle-o ")
                        }
                        break
                    case 'Action Button':
                        if(variables.led_accion['valor_'+i]==1){
                            led.className = led.className.replace("fa-circle-o ","fa-circle ")
                        }else{
                            led.className = led.className.replace("fa-circle ","fa-circle-o ")
                        }
                        break
                    case 'Emergency Button':
                        if(variables.led_emergencia['valor_'+i]==1){
                            led.className = led.className.replace("fa-circle-o ","fa-circle ")
                        }else{
                            led.className = led.className.replace("fa-circle ","fa-circle-o ")
                        }
                        break
                    case 'Photoelectric Barrier':
                        if(variables.led_barrera['valor_'+i]==1){
                            led.className = led.className.replace("fa-circle-o ","fa-circle ")
                        }else{
                            led.className = led.className.replace("fa-circle ","fa-circle-o ")
                        }
                        break
                }
            }
        }
    }
}

function escribir_contadores() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        for (let j = 1; j <= variables.num_contadores; j++) {
            let contador = variables['contador_' + j]
            let element = document.getElementById('estados_campo_Contador' + i + j)
            element.innerHTML = contador['valor_' + i]
        }
    }
}

function leer_ms_subida() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        leer_db_int(variables.bloque_activo, variables.ms_subida['posicion_' + i], (data, err) => {
            if (data) {
                variables.ms_subida['valor_' + i] = data.datos
            }
        })
    }
}

function leer_desv_permitida() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        leer_db_int(variables.bloque_activo, variables.desv_permitida['posicion_' + i], (data, err) => {
            if (data) {
                variables.desv_permitida['valor_' + i] = data.datos
            }
        })
    }
}

function escribir_configuracion() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        let texto = document.getElementById('maxTempDesviacion' + i)
        if (texto != null) {
            texto.innerHTML = variables.desv_permitida['valor_' + i]
        }
    }

    for (let i = 1; i <= variables.num_prensas / 2; i++) {
        let texto = document.getElementById('msSubida' + i)
        if (texto != null) {
            texto.innerHTML = variables.ms_subida['valor_' + i]
        }
    }
}

function leer_modo() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        let modo = variables.modo
        leer_db_int(variables.bloque_activo, modo['posicion_' + i], (data, err) => {
            if (data) {
                modo['valor_' + i] = data.datos
            }
        })
    }
}

function leer_contadores() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        for (let j = 1; j <= variables.num_contadores; j++) {
            let contador = variables['contador_' + j]
            leer_db_long(variables.bloque_activo, contador['posicion_' + i], (data, err) => {
                if (data) {
                    contador['valor_' + i] = data.datos
                }
                else {

                }
            })
        }
    }
}

function leer_temperaturas() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        let temperatura = variables['temperatura_actual']
        leer_db_real(variables.bloque_activo, temperatura['posicion_' + i], (data, err) => {
            if (data) {
                temperatura['valor_' + i] = data.datos
            }
            else {

            }
        })

        let set_temperatura = variables['set_temperatura']
        leer_db_real(variables.bloque_activo, set_temperatura['posicion_' + i], (data, err) => {
            if (data) {
                set_temperatura['valor_' + i] = data.datos
            }
            else {

            }
        })
    }
}

function escribir_temperaturas() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        let temperatura = variables['temperatura_actual']
        let element = document.getElementById('estados_campo_TempActual' + i)
        element.innerHTML = temperatura['valor_' + i]

        let set_temperatura = variables['set_temperatura']
        let element_2 = document.getElementById('estados_campo_SetTemperatura' + i)
        element_2.innerHTML = set_temperatura['valor_' + i]
    }


    if (id_prensa_edicion != '') {
        // si la prensa que esta en edición, esta unida a su compañera
        if (variables.unida['valor_' + id_prensa_edicion] == 1) {
            for (let i = 0; i < variables.num_prensas; i++) {
                let element = document.getElementById('edicion_campo_TempActual1_juntas')
                element.innerHTML = variables['set_temperatura']['valor_' + (id_prensa_edicion)]
                let element_2 = document.getElementById('edicion_campo_TiempoActual1_juntas')
                element_2.innerHTML = variables['set_segundos_ciclo']['valor_' + (id_prensa_edicion)]
            }
        }
        // si la prensa que esta en edición no está unida
        else {
            for (let i = 0; i < variables.num_prensas; i++) {
                let element = document.getElementById('edicion_campo_TempActual' + (id_prensa_edicion + i))
                if (element != null) {
                    element.innerHTML = variables['set_temperatura']['valor_' + (id_prensa_edicion + i)]
                }
            }
        }
    }
}

function leer_minutos() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        let minutos = variables['set_segundos_ciclo']
        leer_db_int(variables.bloque_activo, minutos['posicion_' + i], (data, err) => {
            if (data) {
                minutos['valor_' + i] = data.datos
            }
            else {

            }
        })
    }
}

function escribir_minutos() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        let minutos = variables['set_segundos_ciclo']
        let element = document.getElementById('estados_campo_TiempoActual' + i)
        element.innerHTML = minutos['valor_' + i]
    }

    if (id_prensa_edicion != '') {
        // si la prensa que esta en edición, esta unida a su compañera
        if (variables.unida['valor_' + id_prensa_edicion] == 1) {

        }
        // si la prensa que esta en edición no está unida
        else {
            for (let i = 0; i < variables.num_prensas; i++) {
                let element = document.getElementById('edicion_campo_TiempoActual' + (id_prensa_edicion + i))
                element.innerHTML = variables['set_segundos_ciclo']['valor_' + (id_prensa_edicion + i)]
            }
        }
    }
}



function leer_unidas() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        let unida = variables['unida']
        leer_db_bool(variables.bloque_activo, unida['posicion_' + i], (data, err) => {
            if (data) {
                unida['valor_' + i] = data.datos
            }
            else {

            }
        })
    }
}

function leer_encendidas() {
    for (let i = 1; i <= variables.num_prensas; i++) {
        let encendida = variables['encendida']
        leer_db_bool(variables.bloque_activo, encendida['posicion_' + i], (data, err) => {
            if (data) {
                encendida['valor_' + i] = data.datos
            }
            else {

            }
        })
    }
}


function pintar_botones() {
    let botones = Array.from(document.getElementsByClassName('btn-estado'))
    for (let i = 1; i <= variables.num_prensas; i++) {
        let botones_prensa_i = botones.filter(x => x.id.endsWith(String(i)))

        // si la prensa está encendida
        if (variables.encendida['valor_' + i] == 1) {
            for (let btn of botones_prensa_i) {
                btn.className = btn.className.replace("btn-danger", "btn-primary")
            }

            // si la prensa está unida
            if (variables.unida['valor_' + i] == 1) {
                if (id_prensa_edicion == i) {
                    btnEstadoJuntas = document.getElementById('btnEstado_juntas1')
                    textoEstadoJuntas = document.getElementById('edicion_campo_EstadoPrensa1_juntas')
                    let btnUtil1 = document.getElementById('btnUtil1_juntas1')
                    let btnUtil2 = document.getElementById('btnUtil2_juntas1')
                    if (btnEstadoJuntas != null) {
                        btnEstadoJuntas.className = btnEstadoJuntas.className.replace("btn-danger", "btn-primary")
                        btnUtil1.className = btnUtil1.className.replace("btn-danger", "btn-primary")
                        btnUtil2.className = btnUtil2.className.replace("btn-danger", "btn-primary")
                    }
                    if (textoEstadoJuntas != null) {
                        textoEstadoJuntas.innerHTML = 'ON'
                    }

                    let modos = [1, 2, 3]
                    let modo = variables.modo['valor_' + i]

                    for (let modo_i of modos) {
                        let btnModo = document.getElementById('btnModo' + modo_i + '_juntas' + i)
                        if (btnModo != null) {
                            if (modo_i == modo) {
                                btnModo.className = btnModo.className.replace("btn-secondary", "btn-success")
                            } else {
                                btnModo.className = btnModo.className.replace("btn-success", "btn-secondary")
                            }
                        }
                    }
                }
            }

            // si la prensa está separada
            else {
                if (id_prensa_edicion == i || id_prensa_edicion == i - 1) {
                    let indice = (id_prensa_edicion == i ? i : id_prensa_edicion + 1)
                    let btnEstadoSeparadas = document.getElementById('btnEstado_separadas' + indice)
                    let textoEstadoSeparadas = document.getElementById('edicion_campo_EstadoPrensa' + indice)
                    let btnUtil1 = document.getElementById('btnUtil1_separadas' + indice)
                    let btnUtil2 = document.getElementById('btnUtil2_separadas' + indice)

                    let modos = [1, 2, 3]
                    let modo = variables.modo['valor_' + i]

                    for (let modo_i of modos) {
                        let btnModo = document.getElementById('btnModo' + modo_i + '_separadas' + indice)
                        if (btnModo != null) {
                            if (modo_i == modo) {
                                btnModo.className = btnModo.className.replace("btn-secondary", "btn-success")
                            } else {
                                btnModo.className = btnModo.className.replace("btn-success", "btn-secondary")
                            }
                        }
                    }


                    if (btnEstadoSeparadas != null) {
                        btnEstadoSeparadas.className = btnEstadoSeparadas.className.replace("btn-danger", "btn-primary")
                        btnUtil1.className = btnUtil1.className.replace("btn-danger", "btn-primary")
                        btnUtil2.className = btnUtil2.className.replace("btn-danger", "btn-primary")

                    }
                    if (textoEstadoSeparadas != null) {
                        textoEstadoSeparadas.innerHTML = 'ON'
                    }
                }
            }
        }

        // si la prensa está apagada
        else {
            for (let btn of botones_prensa_i) {
                btn.className = btn.className.replace("btn-primary", "btn-danger")
            }

            // si la prensa está unida
            if (variables.unida['valor_' + i] == 1) {
                if (id_prensa_edicion == i) {
                    btnEstadoJuntas = document.getElementById('btnEstado_juntas1')
                    textoEstadoJuntas = document.getElementById('edicion_campo_EstadoPrensa1_juntas')
                    let btnUtil1 = document.getElementById('btnUtil1_juntas1')
                    let btnUtil2 = document.getElementById('btnUtil2_juntas1')

                    if (btnEstadoJuntas != null) {
                        btnEstadoJuntas.className = btnEstadoJuntas.className.replace("btn-primary", "btn-danger")
                        btnUtil1.className = btnUtil1.className.replace("btn-primary", "btn-danger")
                        btnUtil2.className = btnUtil2.className.replace("btn-primary", "btn-danger")
                    }
                    if (textoEstadoJuntas != null) {
                        textoEstadoJuntas.innerHTML = 'OFF'
                    }
                }
            }

            // si la prensa está separada
            else {
                if (id_prensa_edicion == i || id_prensa_edicion == i - 1) {
                    let indice = (id_prensa_edicion == i ? i : id_prensa_edicion + 1)
                    btnEstadoSeparadas = document.getElementById('btnEstado_separadas' + indice)
                    textoEstadoSeparadas = document.getElementById('edicion_campo_EstadoPrensa' + indice)
                    let btnUtil1 = document.getElementById('btnUtil1_separadas' + indice)
                    let btnUtil2 = document.getElementById('btnUtil2_separadas' + indice)

                    if (btnEstadoSeparadas != null) {
                        btnEstadoSeparadas.className = btnEstadoSeparadas.className.replace("btn-primary", "btn-danger")
                        btnUtil1.className = btnUtil1.className.replace("btn-primary", "btn-danger")
                        btnUtil2.className = btnUtil2.className.replace("btn-primary", "btn-danger")

                    }
                    if (textoEstadoSeparadas != null) {
                        textoEstadoSeparadas.innerHTML = 'OFF'
                    }
                }
            }
        }
    }
}