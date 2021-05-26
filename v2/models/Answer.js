const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')

const BaseModelOptions = require('../core/BaseModelOptions')
const opts = new BaseModelOptions()
const { isClean } = require('../utils/validation')

const schema = new mongoose.Schema({
  content: {
    type: String,
    trim: true,
    validate: isClean,
    default: 'This answer is a WIP'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    ref: 'User',
    populate: {
      select: 'name email'
    },
    required: true,
    immutable: true
  },
  grievanceId: {
    type: mongoose.Schema.Types.ObjectId,
    trim: true,
    ref: 'Grievance',
    populate: {
      select: '_id title'
    },
    required: true,
    immutable: true
  },
  private: {
    type: Boolean,
    default: false
  }
}, opts.schemaOptions)

schema.plugin(safeDelete, opts.safeDeleteOptions)

schema.virtual('upvotes').get(function () {
  const post = this
  // TODO: fetch count of upvotes from avotes collection
  return 1
})

schema.virtual('downvotes').get(function () {
  const post = this
  // TODO: fetch count of downvotes avotes collection
  return 0
})

module.exports = mongoose.model('Answer', schema)
