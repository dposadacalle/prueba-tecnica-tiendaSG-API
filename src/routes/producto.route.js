const express = require("express");

const router = express.Router();

const ProductoController = require('./../controllers/producto.controller');

router.post('/', ProductoController.createProducto);

module.exports = router;