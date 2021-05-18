const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')

const BaseModelOptions = require('../core/BaseModelOptions'),
  opts = new BaseModelOptions()
const { isMimeType } = require('../utils/validation')
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
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    immutable: true
  },
  photo: {
    type: Buffer
  },
  photoFormat: {
    type: String,
    validate: isMimeType
  }
}, opts.schemaOptions)

schema.plugin(safeDelete, opts.safeDeleteOptions)

schema.methods.toJSON = function () {
  const lafItem = this
  const lafJson = lafItem.toObject({ virtuals: true })
  delete lafJson.photo
  delete lafJson.photoFormat
  return lafJson
}

const LostAndFoundItem = mongoose.model('LostAndFoundItem', schema, 'lost_and_found')
module.exports = LostAndFoundItem
