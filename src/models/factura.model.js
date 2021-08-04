const mongoose = require('mongoose');

const Cliente = mongoose.model('Cliente');

const Producto = mongoose.model('Producto');

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
    },

    idCliente: {
        type: mongoose.Types.ObjectId,
        required: true
    },

    idProducto: {
        type: mongoose.Types.ObjectId,
        required: true
    }

}, { timestamps: true });

module.exports = { FacturaSchema };