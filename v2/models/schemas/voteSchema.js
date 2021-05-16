const mongoose = require('mongoose')
class VoteSchemaDefinition {
  constructor (entityName) {
    this.upvote = {
      type: Boolean,
      required: true
    }
    this.userId = {
      type: mongoose.Schema.Types.ObjectId,
      trim: true,
      ref: 'User',
      populate: {
        select: 'name email'
      },
      required: true,
      immutable: true
    }

    this[entityName.toLowerCase() + 'Id'] = {
      type: mongoose.Schema.Types.ObjectId,
      trim: true,
      ref: entityName,
      required: true,
      immutable: true
    }
  }
}

module.exports = VoteSchemaDefinition
