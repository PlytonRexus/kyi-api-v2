const mongoose = require('mongoose')
const debug = require('debug')('common:config:db')

const dbHost = 'mongodb://127.0.0.1:27017/'
const dbName = 'kyi'
const dbUrlDev = dbHost + dbName

try {
  mongoose.connect(process.env.MONGODB_URL || dbUrlDev,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
} catch (e) {
  debug(e.message || e)
}

module.exports = mongoose
