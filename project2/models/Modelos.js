const mongoose = require('mongoose')

const schema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    fec_creacion: {
        type: Date,
        default: Date.now()
    }

})

module.exports = mongoose.model('Prueba', schema)