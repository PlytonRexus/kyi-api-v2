// userId, answerId
const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')

const BaseModelOptions = require('../core/BaseModelOptions')
const opts = new BaseModelOptions()
const ViewSchemaDefinition = require('./schemas/viewSchema')

const schema = new mongoose.Schema(new ViewSchemaDefinition('Answer'), opts.schemaOptions)
schema.plugin(safeDelete, opts.safeDeleteOptions)

const AnswerView = mongoose.model('AnswerView', schema, 'grievance_votes')
module.exports = AnswerView
