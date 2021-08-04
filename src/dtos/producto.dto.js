const mongoose = require('mongoose');

const { ProductoSchema } = require('./../models/producto.model');

ProductoSchema.statics.darAltaProducto = async function(data) {

    try {

        let producto = new Producto(data);

        let docProducto = await producto.save();

        return docProducto;

    } catch (error) {
        console.log(error);
    }

}

ProductoSchema.statics.consultarTodosProductos = async function() {

    const obj = {
        dta: null,
        err: false
    };

    try {

        obj.dta = await this.find({}).lean();
    } catch (error) {

        obj.dta = null;

        obj.err = true;
    }

    return obj;
}

ProductoSchema.statics.actualizarProductoPorId = async function(idProducto, dataUpdate) {

    const obj = {
        dta: null,
        err: false
    };

    try {

        obj.dta = await this.findOneAndUpdate({ _id: idProducto }, {
            $set: {
                codigoProducto: dataUpdate.codigoProducto,
                nombreProducto: dataUpdate.nombreProducto,
                cantidadInventario: dataUpdate.cantidadInventario,
                precioVenta: dataUpdate.precioVenta,
                precioCompra: dataUpdate.precioCompra
            }
        }, { new: true });
    } catch (error) {

        obj.dta = null;

        obj.err = true;

    }

    return obj;

}

ProductoSchema.statics.eliminarProductoPorId = async function(idProducto) {

    const obj = {
        dta: null,
        err: false
    };

    try {

        obj.dta = await this.findOneAndDelete({ _id: idProducto });

    } catch (error) {

        obj.dta = null;

        obj.err = true;
    }

    return obj;

}

ProductoSchema.statics.actualizarCantidadInventarioPoridProducto = async function(idProducto, cantidad){

     const obj = {
        dta: null,
        err: false
    };

    try {

        obj.dta = await this.findOneAndUpdate({ _id: idProducto }, {
            $set: { cantidadInventario: cantidad }
        }, { new: true });
    } catch (error) {

        obj.dta = null;

        obj.err = true;

    }

    return obj;

}

const Producto = mongoose.model('Producto', ProductoSchema);

module.exports = { Producto };