const mongoose = require('mongoose')
require('dotenv').config({ path: 'config.env' })

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.mongo_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('db connected')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = dbConnect