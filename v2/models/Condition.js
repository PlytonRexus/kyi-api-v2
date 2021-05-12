const mongoose = require('mongoose')
const BaseModelOptions = require('../core/BaseModelOptions')

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
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
}, new BaseModelOptions())

module.exports = mongoose.model('Condition', schema, "conditions")
