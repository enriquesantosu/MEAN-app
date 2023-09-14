const Personaje = require('../models/Modelos')

const mongoose = require('mongoose')

exports.crear = async (req, res) => {
    console.log(req.body)
    try {
        let personajeModel
        personajeModel = new Personaje(req.body)

        let personajeModelCheck = await Personaje.findOne({ nombre: personajeModel.nombre })

        if (personajeModelCheck) {
            console.log('error duplicado')
        } else await personajeModel.save()

        res.send(personajeModel)

    } catch (error) {
        console.log(error)
        res.status(502).send('Ups')
    }
}

// exports.obtener = (req, res) => {

// }
