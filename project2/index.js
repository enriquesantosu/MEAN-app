console.log('texto prueba nodemon')

const express = require('express')
const dbConnect = require('./config/db')

const app = express()

dbConnect()

app.use(express.json())


// ruta principal

app.use('api/v1', require('./routes/routes'))



app.listen(3002, () => {
    console.log('la app se esta ejecutando en http://localhost:3002')
})