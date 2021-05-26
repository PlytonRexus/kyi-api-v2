const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')
const BaseModelOptions = require('../core/BaseModelOptions')

const opts = new BaseModelOptions()
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    immutable: true
  },
  patterns: [
    {
      property: {
        type: String,
        required: true
      },
      matches: {
        type: String,
        required: true
      }
    }
  ]
}, opts.schemaOptions)

schema.plugin(safeDelete, opts.safeDeleteOptions)

module.exports = mongoose.model('Condition', schema, 'conditions')
