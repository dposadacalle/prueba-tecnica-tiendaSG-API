const express = require("express");

const router = express.Router();

const ProductoController = require('./../controllers/producto.controller');

router.get('/getAllProductos', ProductoController.listarTodosProductos);

router.post('/crearProducto', ProductoController.crearProducto);

router.patch('/actualizarProducto/:id', ProductoController.actualizarProducto);

router.delete('/eliminarProducto/:id', ProductoController.eliminarProducto);

module.exports = router;