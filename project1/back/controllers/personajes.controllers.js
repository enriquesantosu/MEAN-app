const Personaje = require('../models/Personajes')

exports.crearPersonaje = async (req, res) => {
    console.log(req.body) // esto no lo entendi
    try {
        let personajeModel
        personajeModel = new Personaje(req.body)

        //hacer para que no haya info duplicada, a traves de un condicional

        await personajeModel.save()
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


exports.actualizarPersonajes = (req, res) => {
    res.send('Actualizando personajes'

    )

}
exports.eliminarPersonajes = (req, res) => {
    res.send('Eliminando personajes'

    )

}


