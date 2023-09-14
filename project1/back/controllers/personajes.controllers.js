const Personaje = require('../models/Personajes')

const mongoose = require('mongoose');

exports.crearPersonaje = async (req, res) => {
    console.log(req.body) // esto no lo entendi
    try {
        let personajeModel
        personajeModel = new Personaje(req.body)

        let personajeModelCheck = await Personaje.findOne({ name: personajeModel.name })

        if (personajeModelCheck) {
            console.log('duplicate info not saved')
        } else {
            await personajeModel.save() // el save hace un insertOne
            console.log('personaje salvado')
        }


        res.send(personajeModel)

    } catch (error) {
        console.log(error)
        res.status(502).send('Ups')
    }
}


exports.obtenerPersonajes = async (req, res) => {
    try {
        const personajesData = await Personaje.find()
        res.json(personajesData)
    } catch (error) {
        console.log(error)
        res.status(502).send('Ups')
    }
}
exports.obtenerPersonaje = async (req, res) => {
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {
            const personajeData = await Personaje.findById(req.params.id) // los parametros aqui hacen referencia a los parametros de la url despues del endpoint fijo (endpoint fijo, endpoint dynamico, variable)

            if (!personajeData) {
                res.status(404).send('Personaje no encontrado')
            } else {
                res.json(personajeData)
            }

        } else {
            res.status(400).send('el id proporcionado no existe o no es correcto')
        }


    } catch (error) {
        console.log(error)
        res.status(502).send('Ups')
    }
}

// exports.actualizarPersonajes = async (req, res) => {
//     try {
//         let personajeModel = new Personaje(req.body)

//         let personajeModelCheck = await Personaje.updateOne({ name: personajeModel.name }, { nombre: personajeModel.name, edad: personajeModel.edad, urlImagen: personajeModel.urlImagen })
//     } catch (error) {

//     }

//     res.send('Actualizando personajes'

//     )

// }

exports.eliminarPersonaje = async (req, res) => { //debemos usar el metodo findOneAndRemove()
    try {
        let regexIdMongo = /^[0-9a-fA-F]{24}$/
        if (regexIdMongo.test(req.params.id)) {

            const personajeData = await Personaje.findById(req.params.id) // los parametros aqui hacen referencia a los parametros de la url despues del endpoint fijo (endpoint fijo, endpoint dynamico, variable)

            if (!personajeData) {
                res.status(404).send('Personaje no encontrado')
            } else {
                await Personaje.findOneAndRemove({ _id: req.params.id })
                res.send('personaje eliminado')
            }
        } else {
            res.status(418).send('id esta raro')
        }
    } catch (error) {
        console.log(error)
        res.status(502).send('ups')
    }
}




