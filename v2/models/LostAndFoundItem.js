const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')

const BaseModelOptions = require('../core/BaseModelOptions'),
  opts = new BaseModelOptions()
const schema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true
  },
  found: {
    type: Boolean,
    default: false
  }
}, opts.schemaOptions)

schema.plugin(safeDelete, opts.safeDeleteOptions)

const LostAndFoundItem = mongoose.model('LostAndFoundItem', schema, 'lost_and_found')
module.exports = LostAndFoundItem
