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


function detectar_mousedown() {
    isDown = true;                                    // button status (any button here)
    isLong = false;                                   // longpress status reset
    target = this;                                    // store this as target element
    clearTimeout(longTID);                            // clear any running timers
    longTID = setTimeout(longPress.bind(this), 1500); // create a new timer for this click
};


function longPress() {
    isLong = true;
    this.childNodes[0].innerText = '0'
    // throw custom event or call code for long press
  }