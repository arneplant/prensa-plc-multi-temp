var isDown = false,
    isLong = false,
    target,                                         // which element was clicked
    longTID;


window.addEventListener("mouseup", detectar_mouseup);

function detectar_mouseup(e) {
    if (isDown && isLong) {                           // if a long press, cancel
        isDown = false;                                 // clear in any case
        e.preventDefault();                             // and ignore this event
        return
    }

    if (isDown) {                                     // if we came from down status:
        clearTimeout(longTID);                        // clear timer to avoid false longpress
        isDown = false;
        target = null;
    }
}


function detectar_mousedown(elemento) {
    isDown = true;                                    // button status (any button here)
    isLong = false;                                   // longpress status reset
    target = elemento;                                    // store this as target element
    clearTimeout(longTID);                            // clear any running timers
    longTID = setTimeout(longPress.bind(this), 1500); // create a new timer for this click
};


function longPress() {
    isLong = true;
    let reemplazo = target.id.replace('botonCont','')
    let prensa = reemplazo[1]
    let contador = reemplazo[0]

    $.ajax({
        type: "POST",
        url: "/plc/set_contador",
        data:{
            id: prensa,
            valor: 0,
            contador: contador,
        },
        success: (data) => {
        },
        error: (xhr) => {
            console.log(xhr)
        },
                    timeout: 3000,
    })

    // throw custom event or call code for long press
}