// #Importamos los modulos
const express = require('express')

const app = express()

const cors = require('cors')

const bodyParser = require('body-parser')

const server = require('http').Server(app);

const config = require('./config');
const database = require('./db/database');

// Imprime en consola las peticiones http que hacen cada servicio
const morgan = require("morgan");

require('dotenv/config')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// # Defining all the http header and the request options
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, PATCH, DELETE')
        return res.status(200).json({})
    }
    next();
});

// Importamos las rutas
const rutaCliente = require('./routes/cliente.route');
const rutaProducto = require('./routes/producto.route');
const rutaFactura = require('./routes/factura.route');

app.use(morgan("dev"));

// Usamos las rutas 
app.use('/clientes', rutaCliente);
app.use('/productos', rutaProducto);
// app.use('/rutaFactura', rutaFactura);

app.use((req, res, next) => {
    next({
        message: 'Route not found',
        statusCode: 404,
        level: 'warn',
    });
});

// Connect to database
database.conectar(config.database, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

server.listen(config.port, () => {
    console.log(`Server running at port ${ config.port }`);
});