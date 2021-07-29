// Importamos los Dao's
const { Cliente } = require('./../dtos/cliente.dto');

const { utils } = require('./../utils/util');

const { ObjectID } = require('mongodb');

const obtenerTodosClientes = async(req, res) => {

    try {

        // Devuelve en la variable clientes, el resultado de al consulta de buscar todos los clientes
        const clientes = await Cliente.consultarClientes();

        // Preguntamos, si no esta definida o es null el resultado
        if (utils.isNullOrUndefined(clientes) && (clientes.err || !clientes.dta)) {
            res.send({ status: 204, message: 'Error al realizar la consulta.' });
        }

        res.send({
            data: clientes.dta,
            status: 204
        });
    } catch (error) {
        res.send({ message: error });
    }

}

const crearCliente = async(req, res) => {

    const body = {
        clienteIdent: req.body.clienteIdent,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        fechaNacimiento: new Date(req.body.fechaNacimiento),
        edad: req.body.edad
    };

    try {

        let doc = await Cliente.darAltaCliente(body);

        res.send({
            data: doc,
            status: 200
        });

    } catch (error) {
        res.send({ message: error });
    }
}

const actualizarCliente = async(req, res) => {

    const idCliente = req.params.id;

    if (!ObjectID.isValid(idCliente)) {
        res.send({ status: 500, message: 'Parametro Invalido' });
    }

    console.log(idCliente);
    const body = {
        clienteIdent: req.body.clienteIdent,
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        fechaNacimiento: new Date(req.body.fechaNacimiento),
        edad: req.body.edad
    };

    console.log(body);
    try {

        let clienteUpdated = await Cliente.actualizarPorIdCliente(idCliente, body);

        if (utils.isNullOrUndefined(clienteUpdated) && (clienteUpdated.err || !clienteUpdated.dta)) {

            res.send({ status: 204, message: 'Error al realizar la consulta.' });

        }

        res.send({
            data: clearInterval.dta,
            status: 201,
            message: 'Cliente actualizado correctamente.'
        });

    } catch (error) {
        res.json({ error: true, message: err.message ? err.message : err });
    }
}

const eliminarCliente = async(req, res) => {

    const idCliente = req.params.id;

    if (!ObjectID.isValid(idCliente)) {
        res.send({ status: 500, message: 'Parametro Invalido' });
    }

    try {

        await Cliente.eliminarClientePorId(idCliente);

        res.send({
            message: 'El cliente se ha eliminado exitosamente.'
        });

    } catch (err) {
        res.send({ status: 401, message: err });
    }
}

module.exports = {
    obtenerTodosClientes,
    crearCliente,
    actualizarCliente,
    eliminarCliente
}