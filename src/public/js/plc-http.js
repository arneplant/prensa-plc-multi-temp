const URL = "http://localhost:3000"

function GET(path,cb){
    $.ajax({
        type: "GET",
        url: URL+path,
        timeoout: 1,
        success: (data)=>{
            cb(data,null)
        },
        error: (xhr)=>{
            cb(null,xhr)
        }
    })
}

function conectar(cb){
    GET('/plc/conectar',cb)
 }
 
 function desconectar(cb){
     GET('/plc/desconectar',cb)
 }
 
 function leer_entrada(posicion,cb){
     GET('/plc/leer_entrada/'+posicion,cb)
 }
 
 function leer_salida(posicion,cb){
    GET('/plc/leer_salida/'+posicion,cb)
}

 function leer_db_bool (num_db,posicion,cb){
     GET('/plc/leer_db_bool/'+num_db+'/'+posicion,cb)
 }
 
 function leer_db_int (num_db,posicion,cb){
    GET('/plc/leer_db_int/'+num_db+'/'+posicion,cb)
}
 
 function leer_db_long (num_db,posicion,cb){
    GET('/plc/leer_db_long/'+num_db+'/'+posicion,cb)
}

function leer_db_real (num_db,posicion,cb){
    GET('/plc/leer_db_real/'+num_db+'/'+posicion,cb)
}
 
 function escribir_db(num_db, posicion, tam,valor,cb){
     GET('/plc/leer_db/'+num_db+'/'+posicion+'/'+tam+'/'+valor,cb)
 }
 
 function escribir_db_bool(num_db, posicion,valor,cb){
     GET('/plc/escribir_db_bool/'+num_db+'/'+posicion+'/'+valor,cb)
 }
 
 function escribir_db_int(num_db, posicion,valor,cb){
     GET('/plc/escribir_db_int/'+num_db+'/'+posicion+'/'+valor,cb)
 }

 function escribir_db_long(num_db, posicion,valor,cb){
    GET('/plc/escribir_db_long/'+num_db+'/'+posicion+'/'+valo,cb)
}

function escribir_db_real(num_db, posicion,valor,cb){
    GET('/plc/escribir_db_real/'+num_db+'/'+posicion+'/'+valor,cb)
}