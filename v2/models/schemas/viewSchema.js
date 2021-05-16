const mongoose = require('mongoose')
class ViewSchemaDefinition {
  constructor (entityName) {
    this.userId = {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
    this[entityName.toLowerCase() + 'Id'] = {
      type: mongoose.Schema.Types.ObjectId,
      ref: entityName,
      required: true
    }
  }
}

module.exports = ViewSchemaDefinition
