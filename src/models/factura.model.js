const mongoose = require('mongoose');

const FacturaSchema = new mongoose.Schema({

    numeroFactura: {
        type: Number,
        required: true
    },

    FechaFactura: {
        type: Date,
        required: true
    },

    clienteIdent: {
        type: String,
        required: true
    },

    cantidadVendida: {
        type: Number,
        required: true
    },

    totalVenta: {
        type: Number,
        required: true
    }

}, { timestamps: true });

module.exports = FacturaSchema;