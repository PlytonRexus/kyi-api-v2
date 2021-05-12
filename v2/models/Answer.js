const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  // upvotes, downvotes
}, {
  timestamps: true,
  collection: 'answers'
})

module.exports = mongoose.model('Answer', schema)
