const { Producto } = require('./../dtos/producto.dto');

const { utils } = require('./../utils/util');

const { ObjectID } = require('mongodb');

const listarTodosProductos = async(req, res) => {

    try {

        // Devuelve en la variable clientes, el resultado de al consulta de buscar todos los clientes
        const products = await Producto.consultarTodosProductos();

        // Preguntamos, si no esta definida o es null el resultado
        if (utils.isNullOrUndefined(products) && (products.err || !products.dta)) {
            res.send({ status: 401, message: 'Error al consultar los productos.' });
        }

        res.send({
            data: products.dta,
            status: 204
        });

    } catch (error) {
        res.json({ error: true, message: err.message ? err.message : err });
    }

}

const crearProducto = async(req, res) => {

    const body = {
        codigoProducto: req.body.codigoProducto,
        nombreProducto: req.body.nombreProducto,
        cantidadInventario: req.body.cantidadInventario,
        precioVenta: req.body.precioVenta,
        precioCompra: req.body.precioCompra
    };

    try {

        let doc = await Producto.darAltaProducto(body);

        res.send({
            data: doc,
            status: 200
        });

    } catch (error) {
        res.json({ error: true, message: err.message ? err.message : err });
    }

}

const actualizarProducto = async(req, res) => {

    const idProducto = req.params.id;

    if (!ObjectID.isValid(idProducto)) {
        res.send({ status: 500, message: 'Parametro Invalido' });
    }

    const body = {
        codigoProducto: req.body.codigoProducto,
        nombreProducto: req.body.nombreProducto,
        cantidadInventario: req.body.cantidadInventario,
        precioVenta: req.body.precioVenta,
        precioCompra: req.body.precioCompra
    };

    console.log(body);
    try {

        let resultActualizacion = await Producto.actualizarProductoPorId(idProducto, body);

        if (utils.isNullOrUndefined(resultActualizacion) && (resultActualizacion.err || !resultActualizacion.dta)) {

            res.send({ status: 204, message: 'Error al actualizar el producto.' });

        }

        res.send({
            data: resultActualizacion.dta,
            status: 201,
            message: 'Producto se ha actualizado correctamente.'
        });

    } catch (error) {
        res.json({ error: true, message: err.message ? err.message : err });
    }

}

const eliminarProducto = async(req, res) => {

    const idProducto = req.params.id;

    if (!ObjectID.isValid(idProducto)) {
        res.send({ status: 500, message: 'Parametro Invalido' });
    }

    try {

        await Producto.eliminarProductoPorId(idProducto);

        res.send({
            message: 'El producto se ha eliminado correctamente.'
        });

    } catch (err) {
        res.json({ error: true, message: err.message ? err.message : err });
    }

}

module.exports = {
    listarTodosProductos,
    crearProducto,
    actualizarProducto,
    eliminarProducto
}