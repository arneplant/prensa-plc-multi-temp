var fs = require('fs');

async function readFile(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', function (err, data) {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    });
  }

config = {}

config.settings = {
    'plc_ip': '',
    'block': '0',
    'press_count':'2',
}

config.cambiar_ip= async (ip_1,ip_2,ip_3,ip_4)=>{
    config.settings.plc_ip = ip_1+'.'+ip_2+'.'+ip_3+'.'+ip_4
    config.save()
    try{
        var result = await require('./s7').desconectar()
        result = await require('./s7').conectar()
    }
    catch(ex){
        console.log(ex)
    }
}

config.cambiar_bloque = (bloque)=>{
    try{
        config.settings.block = bloque
        config.save()
        require('./estado-plc').cambiar_lado(bloque)
    }catch(err){
        console.log(err)
    }
}

config.cambiar_num_prensas = (num_prensas)=>{
    try{
        config.settings.press_count = num_prensas
        config.save()
        require('./estado-plc').num_prensas = num_prensas
    }catch(err){
        console.log(err)
    }
}

config.save = () => {
    var data = JSON.stringify(config.settings);
    fs.writeFile('./config.json', data, function (err) {
        if (err) {
            console.log('There has been an error saving your configuration data.');
            console.log(err.message);
            return;
        }
        console.log('Configuration saved successfully.')
    });
}

config.read = async () => {
    try{
        var data = await readFile('./config.json')
        config.settings = JSON.parse(data);
    }
    catch(error){
        console.log(error)
        throw error
    }
}

module.exports = config
