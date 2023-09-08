const moongoosse = require('mongoose')

const personajesSchema = moongoosse.Schema({
    nombre: {
        type: String,
        required: true // esto hace que este campo sea obligatorio para el usuario
    },
    edad: {
        type: Number,
        required: true
    },
    urlImagen: {
        type: String,
        required: true
    },
    fec_cre: {
        type: Date,
        default: Date.now()
    }
}) // esto es lo que nos dice que algo esta mal si el usuario trata de meter una llave equivocada, por ejemplo

module.exports = moongoosse.model('Fighter', personajesSchema)
