const express = require('express')
const router = express.Router()
const personajesController = require('../controllers/personajes.controllers')

router.get('/obtener-personajes', personajesController.obtenerPersonajes)
router.get('/obtener-personaje/:id', personajesController.obtenerPersonaje) // aparte de los 4 metodos normales tambien necesitamos uno que consulte algo especifico

router.post('/crear-personaje', personajesController.crearPersonaje)

router.delete('/eliminar-personaje/:id', personajesController.eliminarPersonaje)

router.put('/actualizar-personaje/:id', personajesController.actualizarPersonaje)

module.exports = router
