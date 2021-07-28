const mongoose = require('mongoose');

const ProductoSchema = new mongoose.Schema({

    codigoProducto: {
        type: String,
        trim: true,
        required: true
    },

    nombreProducto: {
        type: String,
        trim: true,
        required: true
    },

    cantidadInventario: {
        type: Number,
        required: true
    },

    precioVenta: {
        type: Number,
        required: true
    },

    precioCompra: {
        type: Number,
        required: true
    }

}, { timestamps: true });

module.exports = { ProductoSchema };