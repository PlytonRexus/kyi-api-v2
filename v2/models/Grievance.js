// upvote, downvote, views, public/private
const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')

const { isClean } = require('../utils/validation')
const BaseModelOptions = require('../core/BaseModelOptions')
const opts = new BaseModelOptions()

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    validate: isClean,
    trim: true
  },
  content: {
    // markdown ?
    type: String,
    validate: isClean,
    trim: true
  },
  visibilityRules: [
    // rules
    {
      type: String,
      trim: true
    }
  ],
  answeringRules: [
    {
      type: String,
      trim: true
    }
  ],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    immutable: true
  }
}, opts.schemaOptions)

schema.plugin(safeDelete, opts.safeDeleteOptions)

schema.virtual('upvotes').get(function () {
  const post = this
  // TODO: fetch count of upvotes from gvotes collection
  return 1
})

schema.virtual('downvotes').get(function () {
  const post = this
  // TODO: fetch count of downvotes gvotes collection
  return 0
})

schema.virtual('views').get(function () {
  const post = this
  // TODO: fetch count of views from gviews collection
  return 1
})

const Grievance = mongoose.model('Grievance', schema)
module.exports = Grievance

// visibility: [
// # User classification tags:
// self, students:all, students:ug-1,2,3,4,5
// students:pg-1,2,3
// students:highercourses
// students:branchwise
// co
// deans:all, deans:specific, director
// gymkhana:president
// whoCanAnswer: [ ]
//

// 19je, 18je

// self, students:all, official:all
// s

// students: all -> students:

// Greivances
// Answers
// GVotes
// AVotes?
