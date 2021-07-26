const mongoose = require('mongoose');

const { ClienteSchema } = require('./../models/cliente.model');

ClienteSchema.statics.darAltaCliente = async function(data) {

    try {

        let cliente = new Cliente(data);

        let doc = await cliente.save();

        return doc;

    } catch (error) {
        console.log(error);
    }
}

/** Método que consulta todos los clientes que se han dado de alta en la base de datos  */
ClienteSchema.statics.consultarClientes = async function() {

    const obj = {
        dta: null,
        err: false
    };

    try {

        let cliente = this;

        obj.dta = await cliente.find({}).lean();

    } catch (error) {

        obj.dta = null;

        obj.err = true;
    }

    return obj;
}

// Método que actualiza un cliente por su id 
ClienteSchema.statics.actualizarPorIdCliente = function(idCliente, data) {

    const obj = {
        dta: null,
        err: false
    };

    try {

        let cliente = this;

        obj.dta = await cliente.findByIdAndUpdate({ _id: idCliente }, {
            $set: {
                clienteIdent: data.ident,
                nombre: data.nombre,
                telefono: data.fechaNacimiento,
                edad: data.edad
            }
        });
    } catch (error) {

        obj.dta = null;

        obj.err = true;

    }

    return obj;
}

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = { Cliente };