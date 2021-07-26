const mongoose = require('mongoose');

const { ProductoSchema } = require('./../models/producto.model');

ProductoSchema.statics.darAltaProducto = async function(data) {

    let producto = new Producto(data);

    let docProducto = await producto.save();

    return docProducto;

}

const Producto = mongoose.model('Producto', ProductoSchema);

module.exports = { Producto };