const mongoose = require('mongoose')
const debug = require('debug')('common:config:db')

const dbHost = 'mongodb://127.0.0.1:27017/'
const dbName = 'kyi'
const dbUrlDev = dbHost + dbName

mongoose.connect(process.env.MONGODB_URL || dbUrlDev,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }).then(res => debug('Connected to MongoDB'))
  .catch(err => debug(err.message || err))

module.exports = mongoose
