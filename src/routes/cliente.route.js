const express = require("express");

const router = express.Router();

const ClienteController = require('./../controllers/cliente.controller');

router.post('/', ClienteController.createCliente);

module.exports = router;