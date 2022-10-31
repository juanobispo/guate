
const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    codigo: {
        type: String,
        required: false,
    },
    nombre: {
        type: String,
        default: 'JUAN JOSE OBISPO MIRANDA - 2520522009',
    },
    nombreproyecto: {
        type: String,
        required: false,
    },
    monto: {
        type: String,
        required: false,
    },
    fecha: {
        type: String,
        default: new Date().toLocaleDateString()
    }
});

module.exports = model( 'Usuario', UsuarioSchema); 
