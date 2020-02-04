const express = require ('express')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const session = require('express-session');
const path = require('path')
const bodyParser = require('body-parser');
const validator = require('express-validator');
require('./src/lib/estado-plc')
// inicializar
const app = express()

// configuracion
app.set('port',process.env.PORT || 3000)
app.set('views',path.join(__dirname,'src/views'))
app.engine('.hbs',exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname: '.hbs',
    helpers: require('./src/lib/handlebars') // ruta helpers para handlebar
}))
app.set('view engine', '.hbs')

// middleware
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


app.use(validator());


// routes
app.use(require('./src/routes'))
app.use('/dashboard',require('./src/routes/dashboard'))
app.use('/plc',require('./src/routes/plc'))
app.use('/config',require('./src/routes/config'))

// public
app.use(express.static(path.join(__dirname,'src/public')))

// start server
const server = app.listen(app.get('port'),()=>{
    console.log('Listening on port ',app.get('port'))  
})


module.exports = server