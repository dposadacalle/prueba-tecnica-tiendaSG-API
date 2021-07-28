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

        obj.dta = await cliente.find({});

    } catch (error) {

        obj.dta = null;

        obj.err = true;
    }

    return obj;
}

// Método que actualiza un cliente por su id 
ClienteSchema.statics.actualizarPorIdCliente = async function(idCliente, data) {

    const obj = {
        dta: null,
        err: false
    };

    try {

        obj.dta = await this.findOneAndUpdate({ _id: idCliente }, {
            $set: {
                clienteIdent: data.clienteIdent,
                nombre: data.nombre,
                apellido: data.apellido,
                telefono: data.telefono,
                fechaNacimiento: data.fechaNacimiento,
                edad: data.edad
            }
        }, { new: true });
    } catch (error) {

        obj.dta = null;

        obj.err = true;

    }

    return obj;
}

/** Método que elimina de la entidad cliente por el ID  */
ClienteSchema.statics.eliminarClientePorId = async function(idCliente) {

    const obj = {
        dta: null,
        err: false
    };

    try {

        obj.dta = await this.findOneAndDelete({ _id: idCliente });
    } catch (error) {

        obj.dta = null;

        obj.err = true;
    }

    return obj;
}

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = { Cliente };