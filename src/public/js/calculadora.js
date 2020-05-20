
idBotonSolicitaNumero = ''

function asignar_funcionalidad_calculadora() {
    let nombre_btn_base = 'btn'
    for (let i = 0; i < 10; i++) {
        let btn_id = nombre_btn_base + i
        let btn = document.getElementById(btn_id)
        btn.addEventListener('click', () => {
            escribir_numero_pantalla(i)
        }, false)
    }

    let btn_clr_single = document.getElementById('btnClearSingle')
    btn_clr_single.addEventListener('click', () => {
        borrar_uno_solo()
    }, false)

    let btn_clr = document.getElementById('btnClearAll')
    btn_clr.addEventListener('click', () => {
        borrar_todo()
    }, false)

    let btn_esc = document.getElementById('btnEsc')
    btn_esc.addEventListener('click', () => {
        salir_calculadora()
    }, false)

    let btn_enter = document.getElementById('btnEnter')
    btn_enter.addEventListener('click', () => {
        enviar_valor_y_salir()
    }, false)
}

function enviar_valor_y_salir() {
    let boton = (idBotonSolicitaNumero)
    escribir_automata()
    let pantalla = document.getElementById('pantalla')
    salir_calculadora()
}

function escribir_automata() {
    switch (idBotonSolicitaNumero.id) {
        case "btnUtil11": // set temperatura
            $.ajax({
                type: "POST",
                url: "/plc/set_temperatura",
                data: {
                    id: 1,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break
        case "btnUtil12": // set temperatura
            $.ajax({
                type: "POST",
                url: "/plc/set_temperatura",
                data: {
                    id: 2,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break
        case "btnUtil13": // set temperatura
            $.ajax({
                type: "POST",
                url: "/plc/set_temperatura",
                data: {
                    id: 3,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break
        case "btnUtil14": // set temperatura
            $.ajax({
                type: "POST",
                url: "/plc/set_temperatura",
                data: {
                    id: 4,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break
        case "btnUtil21": // set set seg ciclo
            $.ajax({
                type: "POST",
                url: "/plc/set_seg_ciclo",
                data: {
                    id: 1,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break
        case "btnUtil22": // set seg ciclo
            $.ajax({
                type: "POST",
                url: "/plc/set_seg_ciclo",
                data: {
                    id: 2,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break
        case "btnUtil23": // set seg ciclo
            $.ajax({
                type: "POST",
                url: "/plc/set_seg_ciclo",
                data: {
                    id: 3,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break
        case "btnUtil24": // set seg ciclo
            $.ajax({
                type: "POST",
                url: "/plc/set_seg_ciclo",
                data: {
                    id: 4,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break




        case "btnMaxTempDesviacion1":
            $.ajax({
                type: "POST",
                url: "/plc/set_temp_desviacion",
                data: {
                    id: 1,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                }
            })
            break
        case "btnMaxTempDesviacion2":
            $.ajax({
                type: "POST",
                url: "/plc/set_temp_desviacion",
                data: {
                    id: 2,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                }
            })
            break
        case "btnMaxTempDesviacion3":
            $.ajax({
                type: "POST",
                url: "/plc/set_temp_desviacion",
                data: {
                    id: 3,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                }
            })
            break
        case "btnMaxTempDesviacion4":
            $.ajax({
                type: "POST",
                url: "/plc/set_temp_desviacion",
                data: {
                    id: 4,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                }
            })
            break

        case "btnMsSubida1":
            $.ajax({
                type: "POST",
                url: "/plc/set_ms_subida",
                data: {
                    id: 1,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                }
            })
            break

        case "btnMsSubida3":
            $.ajax({
                type: "POST",
                url: "/plc/set_ms_subida",
                data: {
                    id: 3,
                    valor: pantalla.value,
                },
                success: (data) => {

                },
                error: (xhr) => {
                    console.log(xhr)
                }
            })
            break

        case "botonCont31":
            $.ajax({
                type: "POST",
                url: "/plc/set_contador_3",
                data: {
                    id: 1,
                    valor: pantalla.value,
                    //contador: 3,
                },
                success: (data) => {
                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break

        case "botonCont32":
            $.ajax({
                type: "POST",
                url: "/plc/set_contador_3",
                data: {
                    id: 2,
                    valor: pantalla.value,
                    //contador: 3,
                },
                success: (data) => {
                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break

        case "botonCont33":
            $.ajax({
                type: "POST",
                url: "/plc/set_contador_3",
                data: {
                    id: 3,
                    valor: pantalla.value,
                    //contador: 3,
                },
                success: (data) => {
                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break

        case "botonCont34":
            $.ajax({
                type: "POST",
                url: "/plc/set_contador_3",
                data: {
                    id: 4,
                    valor: pantalla.value,
                    //contador: 3,
                },
                success: (data) => {
                },
                error: (xhr) => {
                    console.log(xhr)
                },
                timeout: 3000,
            })
            break
    }
}



function salir_calculadora() {
    let pantalla = document.getElementById('pantalla')
    pantalla.value = '0'
    $('#modalCalculadora').modal('toggle');
}

function comprobar_blanco() {
    let pantalla = document.getElementById('pantalla')
    if (pantalla.value == '') {
        pantalla.value = '0'
    }
}

function borrar_todo() {
    let pantalla = document.getElementById('pantalla')
    pantalla.value = ''
    comprobar_blanco()
}

function borrar_uno_solo() {
    let pantalla = document.getElementById('pantalla')
    pantalla.value = pantalla.value.substring(0, pantalla.value.length - 1)
    comprobar_blanco()
}

function escribir_numero_pantalla(numero) {
    let pantalla = document.getElementById('pantalla')
    if (pantalla.value == '0') {
        pantalla.value = ''
    }
    pantalla.value = pantalla.value + numero
}