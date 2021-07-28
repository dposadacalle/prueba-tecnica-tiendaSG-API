const express = require("express");

const router = express.Router();

const ClienteController = require('./../controllers/cliente.controller');

router.post('/createCliente', ClienteController.crearCliente);

router.get('/getAllClientes', ClienteController.obtenerTodosClientes);

router.patch('/:id', ClienteController.actualizarCliente);

router.delete('/:id', ClienteController.eliminarCliente);

module.exports = router;