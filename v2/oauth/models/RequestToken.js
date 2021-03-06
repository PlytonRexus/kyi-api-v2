const mongoose = require('mongoose')
const BaseModelOptions = require('../../core/BaseModelOptions')

const opts = new BaseModelOptions()
const schema = new mongoose.Schema({
  used: {
    type: Boolean,
    default: false
  },
  token: {
    type: String,
    trim: true,
    required: true
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, opts.schemaOptions)

schema.plugin(opts.safeDeleteOptions)

const RequestToken = mongoose.model('RequestToken', schema, 'request_tokens')
module.exports = RequestToken
