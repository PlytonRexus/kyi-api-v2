const mongoose = require('mongoose')

const schema = mongoose.Schema({

}, {
  timestamps: true,
  collection: 'answers'
})

module.exports = mongoose.model('Answer', schema)
