const express = require('express')
const router = express.Router()
const controllers = require('../controllers/controllersPrueba')

router.post('/crear-personaje', controllers.crear)

module.exports = router