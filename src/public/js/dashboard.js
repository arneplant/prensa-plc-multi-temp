
id_prensa_edicion = ''

let tabla_estados_armada = false
let tabla_edicion_juntas_armada = false
let tabla_edicion_separadas_armada = false

function juntar_prensas() {
    mostrar_prensas_juntas()
    escribir_db_bool(variables.bloque_activo, variables.unida['posicion_' + id_prensa_edicion], true, (data, err) => {
        if (data) {
            console.log(data)
        }
        else {
            console.log(err)
        }
    })
}


function separar_prensas() {
    mostrar_prensas_separadas()
    escribir_db_bool(variables.bloque_activo, variables.unida['posicion_' + id_prensa_edicion], false, (data, err) => {
        if (data) {
            console.log(data)
        }
        else {
            console.log(err)
        }
    })
}

function mostrar_pagina(indice) {
    for (let i = 0; i < 20; i++) {
        let pagina = document.getElementById('pagina-' + i)
        if (pagina != null) {
            if (i == indice) {
                pagina.style.display = ''
            }
            else {
                pagina.style.display = 'none'
            }
        }
    }
}

function mostrar_tabla_estados() {
    if (!tabla_estados_armada) {
        armar_tabla_estados()
        tabla_estados_armada = true
    }
    mostrar_pagina(1)

}

function armar_tabla_edicion(id_prensa) {
    if(variables.unida['valor_'+id_prensa] == 0){
        if (!tabla_edicion_separadas_armada) {
            armar_tabla_edicion_separadas()
            tabla_edicion_separadas_armada = true
        }
        mostrar_prensas_separadas()
    }
    else {
        if (!tabla_edicion_juntas_armada) {
            armar_tabla_edicion_juntas()
            tabla_edicion_juntas_armada = true
        }
        mostrar_prensas_juntas()
    }
}


function mostrar_tabla_edicion(id) {
    if(id==null){
        id = id_prensa_edicion
    }
    switch (id) {
        case 1: id_prensa_edicion = 1; break
        case 2: id_prensa_edicion = 1; break
        case 3: id_prensa_edicion = 3; break
        case 4: id_prensa_edicion = 3; break
    }
    armar_tabla_edicion(id)
    mostrar_pagina(2)
}

function mostrar_configuracion() {
    armar_tabla_configuracion()
    mostrar_pagina(3)
}

function mostrar_admin() {
    mostrar_pagina(4)
    const param_com = document.getElementById('parametros-comunicacion')
    const acciones_prensas = document.getElementById('acciones-prensas')
    param_com.style.display = 'none'
    acciones_prensas.style.display = 'grid'
    armar_tabla_admin()
}

function mostrar_parametros_conexion() {
    mostrar_pagina(4)
    const param_com = document.getElementById('parametros-comunicacion')
    param_com.style.display = 'grid'
    acciones_prensas.style.display = 'none'
}

function mostrar_prensas_separadas() {
    btn_juntar.style.display = ''
    btn_separar.style.display = 'none'
    prensas_separadas.style.display = 'grid'
    prensas_juntas.style.display = 'none'
    if (!tabla_edicion_separadas_armada) {
        armar_tabla_edicion_separadas()
        tabla_edicion_separadas_armada = true
    }
}

function mostrar_prensas_juntas() {
    btn_juntar.style.display = 'none'
    btn_separar.style.display = ''
    prensas_separadas.style.display = 'none'
    prensas_juntas.style.display = 'grid'

    if (!tabla_edicion_juntas_armada) {
        armar_tabla_edicion_juntas()
        tabla_edicion_juntas_armada = true
    }
}

function armar_tabla_estados() {
    const pagina1 = document.getElementById('pagina-1')

    let num_lados = 2
    let num_prensas_por_lado = 2
    let num_botones_rojos_por_prensa = 2
    let num_botones_azules_por_presna = 3

    for (let i = 0; i < num_prensas_por_lado * num_lados; i++) {
        let botonera_i = document.createElement('DIV')
        let botonera_i_id = "botonera-" + (i + 1)
        botonera_i.classList.add(botonera_i_id)
        botonera_i.id = botonera_i_id

        let botones_rojos = []
        let botones_azules = []

        let botonTemp = document.createElement('BUTTON'); botonTemp.id = 'botonTemp' + (i + 1); botones_rojos.push(botonTemp)
        let botonTime = document.createElement('BUTTON'); botonTime.id = 'botonTime' + (i + 1); botones_rojos.push(botonTime)
        let botonCont1 = document.createElement('BUTTON'); botonCont1.id = 'botonCont1' + (i + 1); botones_azules.push(botonCont1)
        let botonCont2 = document.createElement('BUTTON'); botonCont2.id = 'botonCont2' + (i + 1); botones_azules.push(botonCont2)
        let botonCont3 = document.createElement('BUTTON'); botonCont3.id = 'botonCont3' + (i + 1); botones_azules.push(botonCont3)

        for (let btn of botones_rojos) {
            btn.classList.add('btn')
            btn.classList.add('btn-estado')
            btn.classList.add('btn-danger')

            if (btn.id.startsWith('botonTemp')) {
                btn.innerHTML = `
                <div class='dos-textos-vertical'>
                    <div><span id="estados_campo_TempActual${i + 1}" class='fuente-grande'>0</span><span class='fuente-grande'>ººº</span></div>
                    <div> <span class='fuente-mediana'>&#60;</span>
                            <span id="estados_campo_SetTemperatura${i + 1}" class='fuente-mediana'>0</span>
                            <span class='fuente-mediana'>º</span>
                            <span class='fuente-mediana'>&#62;</span>
                    </div>        
                </div>`
            }
            else {
                btn.innerHTML = `
                <span id="estados_campo_TiempoActual${i + 1}" class='fuente-grande'>0</span>
                <span class='fuente-grande'>''</span>`
            }

            botonera_i.appendChild(btn)

            btn.addEventListener('click', () => {
                mostrar_tabla_edicion(i + 1)
            }, false)
        }

        for (let j = 0; j < botones_azules.length; j++) {
            let btn = botones_azules[j]
            btn.classList.add('btn')
            btn.classList.add('btn-estado')
            btn.classList.add('btn-danger')

            btn.innerHTML = `<span id="estados_campo_Contador${i + 1}${j + 1}" class='fuente-grande'>-1</span>`
            //btn.datatogle
            botonera_i.appendChild(btn)
            btn.addEventListener('mousedown', detectar_mousedown, false)
        }

        pagina1.appendChild(botonera_i)
    }
}


function armar_tabla_edicion_separadas() {
    const prensas_separadas = document.getElementById('prensas-separadas')

    let num_lados = 2

    for (let i = 0; i < num_lados; i++) {
        let prensa_i = document.createElement('DIV')
        let prensa_i_id = "prensa-" + (i + 1)
        prensa_i.classList.add("prensa")
        prensa_i.id = prensa_i_id

        let botones_rojos = []
        let botones_azules = []
        let botones_grises = []

        let btnEstado = document.createElement('BUTTON'); btnEstado.id = 'btnEstado_separadas' + (i + 1); botones_rojos.push(btnEstado)
        let btnUtil1 = document.createElement('BUTTON'); btnUtil1.id = 'btnUtil1_separadas' + (i + 1); botones_azules.push(btnUtil1)
        let btnUtil2 = document.createElement('BUTTON'); btnUtil2.id = 'btnUtil2_separadas' + (i + 1); botones_azules.push(btnUtil2)
        let btnModo1 = document.createElement('BUTTON'); btnModo1.id = 'btnModo1_separadas' + (i + 1); botones_grises.push(btnModo1)
        let btnModo2 = document.createElement('BUTTON'); btnModo2.id = 'btnModo2_separadas' + (i + 1); botones_grises.push(btnModo2)
        let btnModo3 = document.createElement('BUTTON'); btnModo3.id = 'btnModo3_separadas' + (i + 1); botones_grises.push(btnModo3)

        let botones_util = document.createElement('DIV')
        botones_util.classList.add('dos-botones-horizontal')

        let botones_modo = document.createElement('DIV')
        botones_modo.classList.add('tres-botones-horizontal')


        btnEstado.classList.add('btn')
        btnEstado.classList.add('btn-danger')
        btnEstado.classList.add('btn-personalizado')
        btnEstado.innerHTML = `<span id="edicion_campo_EstadoPrensa${i + 1}" class='fuente-grande'>OFF</span>`
        prensa_i.appendChild(btnEstado)
        btnEstado.addEventListener('click', () => {
            escribir_db_bool(variables.bloque_activo, variables.encendida['posicion_' + (i + id_prensa_edicion)], (variables.encendida['valor_' + (i + id_prensa_edicion)] == 1) ? 'false' : 'true', (data, err) => {

            })
        }, false)

        btnUtil1.classList.add('btn')
        btnUtil1.classList.add('btn-danger')
        btnUtil1.classList.add('btn-personalizado')
        btnUtil1.innerHTML = `<span id="edicion_campo_TempActual${i + 1}" class='fuente-grande'>123</span><span class='fuente-grande'>º</span>`
        btnUtil1.addEventListener('click', () => {
            $("#modalCalculadora").modal('show')
            idBotonSolicitaNumero = btnUtil1.id
        }, false)
        botones_util.appendChild(btnUtil1)

        btnUtil2.classList.add('btn')
        btnUtil2.classList.add('btn-danger')
        btnUtil2.classList.add('btn-personalizado')
        btnUtil2.innerHTML = `<span id="edicion_campo_TiempoActual${i + 1}" class='fuente-grande'>123</span><span class='fuente-grande'>''</span>`
        btnUtil2.addEventListener('click', () => {
            $("#modalCalculadora").modal('show')
            idBotonSolicitaNumero = btnUtil2.id
        }, false)
        botones_util.appendChild(btnUtil2)
        prensa_i.appendChild(botones_util)

        btnModo1.innerHTML = `<span class='fuente-mediana'>NORMAL</span>`
        btnModo1.classList.add('btn')
        btnModo1.classList.add('btn-secondary')
        btnModo1.classList.add('btn-personalizado')
        btnModo1.addEventListener('click', () => {
            escribir_db_int(variables.bloque_activo, variables.modo['posicion_' + (id_prensa_edicion + i)], 1, (data, error) => {

            })
        }, false)
        botones_modo.appendChild(btnModo1)

        btnModo2.innerHTML = `<span class='fuente-mediana'>SETUP</span>`
        btnModo2.classList.add('btn')
        btnModo2.classList.add('btn-secondary')
        btnModo2.classList.add('btn-personalizado')
        btnModo2.addEventListener('click', () => { 
            escribir_db_int(variables.bloque_activo, variables.modo['posicion_' + (id_prensa_edicion + i)], 2, (data, error) => {

            })
         }, false)
        botones_modo.appendChild(btnModo2)

        btnModo3.innerHTML = `<span class='fuente-mediana'>WARM</span>`
        btnModo3.classList.add('btn')
        btnModo3.classList.add('btn-secondary')
        btnModo3.classList.add('btn-personalizado')
        btnModo3.addEventListener('click', () => { 
            escribir_db_int(variables.bloque_activo, variables.modo['posicion_' + (id_prensa_edicion + i)], 3, (data, error) => {

            })
         }, false)
        botones_modo.appendChild(btnModo3)

        prensa_i.appendChild(botones_modo)

        prensas_separadas.appendChild(prensa_i)
    }
}

function armar_tabla_edicion_juntas() {
    const prensas_juntas = document.getElementById('prensas-juntas')
    prensas_juntas.innerHTML = ""

    let num_lados = 1

    for (let i = 0; i < num_lados; i++) {
        let prensa_i = document.createElement('DIV')
        let prensa_i_id = "prensa-" + (i + 1)
        prensa_i.classList.add("prensa")
        prensa_i.id = prensa_i_id

        let botones_rojos = []
        let botones_azules = []
        let botones_grises = []

        let btnEstado = document.createElement('BUTTON'); btnEstado.id = 'btnEstado_juntas' + (i + 1); botones_rojos.push(btnEstado)
        let btnUtil1 = document.createElement('BUTTON'); btnUtil1.id = 'btnUtil1_juntas' + (i + 1); botones_azules.push(btnUtil1)
        let btnUtil2 = document.createElement('BUTTON'); btnUtil2.id = 'btnUtil2_juntas' + (i + 1); botones_azules.push(btnUtil2)
        let btnModo1 = document.createElement('BUTTON'); btnModo1.id = 'btnModo1_juntas' + (i + 1); botones_grises.push(btnModo1)
        let btnModo2 = document.createElement('BUTTON'); btnModo2.id = 'btnModo2_juntas' + (i + 1); botones_grises.push(btnModo2)
        let btnModo3 = document.createElement('BUTTON'); btnModo3.id = 'btnModo3_juntas' + (i + 1); botones_grises.push(btnModo3)

        let botones_util = document.createElement('DIV')
        botones_util.classList.add('dos-botones-horizontal')

        let botones_modo = document.createElement('DIV')
        botones_modo.classList.add('tres-botones-horizontal')

        btnEstado.classList.add('btn')
        btnEstado.classList.add('btn-danger')
        btnEstado.classList.add('btn-personalizado')
        btnEstado.innerHTML = `<span id="edicion_campo_EstadoPrensa${i + 1}_juntas" class='fuente-grande'>OFF</span>`
        btnEstado.addEventListener('click', () => {
            escribir_db_bool(variables.bloque_activo, variables.encendida['posicion_' + (id_prensa_edicion)], (variables.encendida['valor_' + (id_prensa_edicion)] == 1) ? 'false' : 'true', (data, err) => {

            })
        })
        prensa_i.appendChild(btnEstado)

        btnUtil1.classList.add('btn')
        btnUtil1.classList.add('btn-danger')
        btnUtil1.classList.add('btn-personalizado')
        btnUtil1.innerHTML = `<span id="edicion_campo_TempActual${i + 1}_juntas" class='fuente-grande'>123</span><span class='fuente-grande'>º</span>`
        btnUtil1.addEventListener('click', () => {
            $("#modalCalculadora").modal('show')
            idBotonSolicitaNumero = btnUtil1.id
        }, false)
        botones_util.appendChild(btnUtil1)

        btnUtil2.classList.add('btn')
        btnUtil2.classList.add('btn-danger')
        btnUtil2.classList.add('btn-personalizado')
        btnUtil2.innerHTML = `<span id="edicion_campo_TiempoActual${i + 1}_juntas" class='fuente-grande'>123</span><span class='fuente-grande'>''</span>`
        btnUtil2.addEventListener('click', () => {
            $("#modalCalculadora").modal('show')
            idBotonSolicitaNumero = btnUtil2.id
        }, false)
        botones_util.appendChild(btnUtil2)
        prensa_i.appendChild(botones_util)

        btnModo1.classList.add('btn')
        btnModo1.classList.add('btn-secondary')
        btnModo1.classList.add('btn-personalizado')
        btnModo1.innerHTML = `<span class='fuente-mediana'>NORMAL</span>`
        btnModo1.addEventListener('click', () => { 
            escribir_db_int(variables.bloque_activo, variables.modo['posicion_' + (id_prensa_edicion)], 1, (data, error) => {

            })
         }, false)
        botones_modo.appendChild(btnModo1)

        btnModo2.classList.add('btn')
        btnModo2.classList.add('btn-secondary')
        btnModo2.classList.add('btn-personalizado')
        btnModo2.innerHTML = `<span class='fuente-mediana'>SETUP</span>`
        btnModo2.addEventListener('click', () => { 
            escribir_db_int(variables.bloque_activo, variables.modo['posicion_' + (id_prensa_edicion)], 2, (data, error) => {

            })
        }, false)
        botones_modo.appendChild(btnModo2)

        btnModo3.classList.add('btn')
        btnModo3.classList.add('btn-secondary')
        btnModo3.classList.add('btn-personalizado')
        btnModo3.innerHTML = `<span class='fuente-mediana'>WARM</span>`
        btnModo3.addEventListener('click', () => { 
            escribir_db_int(variables.bloque_activo, variables.modo['posicion_' + (id_prensa_edicion)], 3, (data, error) => {

            })
         }, false)
        botones_modo.appendChild(btnModo3)

        prensa_i.appendChild(botones_modo)

        prensas_juntas.appendChild(prensa_i)
    }
}

function armar_tabla_configuracion() {
    parametros_prensas.innerHTML = ''

    let numero_prensas = 4

    // primera fila
    var div_cabecera = document.createElement('DIV')
    div_cabecera.classList.add('cinco-elementos-horizontal')
    var span_vacio = document.createElement('SPAN')
    div_cabecera.appendChild(span_vacio)
    for (let i = 1; i <= numero_prensas; i++) {
        var span_nombre_prensa = document.createElement('SPAN')
        span_nombre_prensa.classList.add('cabecera-columna')
        span_nombre_prensa.innerHTML = 'Press ' + (i < 3 ? 1 : 2) + '.' + (i % 2 == 0 ? 2 : 1)
        div_cabecera.appendChild(span_nombre_prensa)
    }
    parametros_prensas.appendChild(div_cabecera)
    // fin primera fila

    // segunda fila
    var segunda_fila = document.createElement('DIV')
    segunda_fila.classList.add('cabecera-y-tres-elementos-horizontal')
    var span_cabecera1 = document.createElement('SPAN')
    span_cabecera1.classList.add('cabecera-fila')
    span_cabecera1.innerHTML = 'Upload'
    segunda_fila.appendChild(span_cabecera1)
    for (let i = 1; i <= numero_prensas/2; i++) {
        let btnUpload_i = document.createElement('BUTTON')
        btnUpload_i.classList.add('btn')
        btnUpload_i.classList.add('btn-primary')
        btnUpload_i.classList.add('btn-personalizado')
        btnUpload_i.innerHTML = `<span id="msSubida${i}" class='fuente-grande'>0</span><span class='fuente-grande'>ms.</span>`
        btnUpload_i.id = 'btnMsSubida' + i
        btnUpload_i.addEventListener('click', () => {
            $("#modalCalculadora").modal('show')
            idBotonSolicitaNumero = btnUpload_i.id
        })
        segunda_fila.appendChild(btnUpload_i)
    }
    parametros_prensas.appendChild(segunda_fila)
    // fin segunda fila

    // tercera fila
    var tercera_fila = document.createElement('DIV')
    tercera_fila.classList.add('cinco-elementos-horizontal')
    var span_cabecera2 = document.createElement('SPAN')
    span_cabecera2.classList.add('cabecera-fila')
    span_cabecera2.innerHTML = 'Temp.Dev.'
    tercera_fila.appendChild(span_cabecera2)

    for (let i = 1; i <= numero_prensas; i++) {
        let btnMaxTempDeviation_i = document.createElement('BUTTON')
        btnMaxTempDeviation_i.classList.add('btn')
        btnMaxTempDeviation_i.classList.add('btn-primary')
        btnMaxTempDeviation_i.classList.add('btn-personalizado')
        btnMaxTempDeviation_i.innerHTML = `<span id="maxTempDesviacion${i}" class='fuente-grande'>0 </span><span class='fuente-grande'>%</span>`
        btnMaxTempDeviation_i.id = 'btnMaxTempDesviacion' + i
        btnMaxTempDeviation_i.addEventListener('click', () => {
            $("#modalCalculadora").modal('show')
            idBotonSolicitaNumero = btnMaxTempDeviation_i.id
        })
        tercera_fila.appendChild(btnMaxTempDeviation_i)
    }

    parametros_prensas.appendChild(tercera_fila)
    // fin tercera fila

    // cuarta fila
    var cuarta_fila = document.createElement('DIV')
    cuarta_fila.classList.add('cinco-elementos-horizontal')

    parametros_prensas.appendChild(cuarta_fila)
    // fin cuarta fila

    // quinta fila
    var quinta_fila = document.createElement('DIV')
    quinta_fila.classList.add('cinco-elementos-horizontal')

    parametros_prensas.appendChild(quinta_fila)
    // fin quinta fila
}

function armar_tabla_admin() {
    const acciones_prensas = document.getElementById('acciones-prensas')
    acciones_prensas.innerHTML = ''

    let numero_prensas = 4

    // primera fila
    var div_cabecera = document.createElement('DIV')
    div_cabecera.classList.add('cinco-elementos-horizontal')
    var span_vacio = document.createElement('SPAN')
    div_cabecera.appendChild(span_vacio)
    for (let i = 1; i <= numero_prensas; i++) {
        var span_nombre_prensa = document.createElement('SPAN')
        span_nombre_prensa.classList.add('cabecera-columna')
        span_nombre_prensa.innerHTML = 'Press ' + (i < 3 ? 1 : 2) + '.' + (i % 2 == 0 ? 2 : 1)
        div_cabecera.appendChild(span_nombre_prensa)
    }
    acciones_prensas.appendChild(div_cabecera)
    // fin primera fila

    let cabeceras_filas = ['Temperature'/*, 'Upload Press', 'Download Press'*/, 'Open Press', 'Close Press',
        'Action Button', 'Emergency Button', 'Photoelectric Barrier']
    for (let i = 0; i < cabeceras_filas.length; i++) {
        var div_fila = document.createElement('DIV')
        div_fila.classList.add('cinco-elementos-horizontal')

        var cabecera_fila = document.createElement('SPAN')
        cabecera_fila.classList.add('cabecera-fila')
        cabecera_fila.innerHTML = cabeceras_filas[i]

        div_fila.appendChild(cabecera_fila)

        for (let j = 1; j <= numero_prensas; j++) {
            var span_led = document.createElement('SPAN')
            let clase_circulo = 'fa-circle-o'

            span_led.innerHTML = `<i id="${cabeceras_filas[i]}_${j}" class='fa ${clase_circulo} fuente-grande' aria-hidden='true'></i>`
            span_led.style.color = 'greenyellow'
            div_fila.appendChild(span_led)
        }

        acciones_prensas.appendChild(div_fila)
    }
}

