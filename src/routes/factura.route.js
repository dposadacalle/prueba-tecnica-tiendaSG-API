const express = require("express");

const router = express.Router();

const FacturaController = require('./../controllers/factura.controller');

router.post('/darAltaFactura', FacturaController.darAltaFactura);

router.get('/consultarFacturaPorFecha', FacturaController.consultarFacturasPorFecha);

module.exports = router;