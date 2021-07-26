const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    clienteIdent: {
        type: String,
        trim: true,
        required: true
    },

    nombre: {
        type: String,
        trim: true,
        required: true
    },

    apellido: {
        type: String,
        trim: true,
        required: true
    },

    telefono: {
        type: String,
        trim: true,
        required: true
    },

    fechaNacimiento: {
        type: Date,
        required: true
    },

    edad: {
        type: Number,
        required: true
    }

});

module.exports = { ClienteSchema };