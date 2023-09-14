const express = require('express')
const conectarDB = require('./config/db')

const app = express() //esta ejecutando la libreria express
conectarDB()

app.use(express.json())

//rutas - endpoint

app.use('/api/v1', require('./routes/routes'))

app.listen(3005, () => {
    console.log("la aplicación se está ejecutando en http://localhost:3005")
})
