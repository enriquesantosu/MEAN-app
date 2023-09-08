const express = require('express')
const router = express.Router()
const personajesController = require('../controllers/personajes.controllers')

router.get('/obtener-personajes', personajesController.obtenerPersonajes)

router.post('/crear-personaje', personajesController.crearPersonaje)

router.put('/', personajesController.actualizarPersonajes)

router.delete('/', personajesController.eliminarPersonajes)

module.exports = router
