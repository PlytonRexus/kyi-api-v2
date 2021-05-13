const mongoose = require('mongoose')
const BaseModelOptions = require('../../core/BaseModelOptions')

const opts = new BaseModelOptions()
const schema = new mongoose.Schema({
  secret: {
    type: String,
    trim: true,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  redirectURI: {
    type: String,
    required: true
  }
}, opts.schemaOptions)

schema.plugin(opts.safeDeleteOptions)
const Client = mongoose.model('Client', schema)
module.exports = Client
