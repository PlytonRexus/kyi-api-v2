// userId, grievanceId
const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')

const ViewSchemaDefinition = require('./schemas/viewSchema')
const BaseModelOptions = require('../core/BaseModelOptions')
const opts = new BaseModelOptions()

const schema = new mongoose.Schema(new ViewSchemaDefinition('Grievance'), opts.schemaOptions)
schema.plugin(safeDelete, opts.safeDeleteOptions)

const GrievanceView = mongoose.model('GrievanceView', schema, 'grievance_votes')
module.exports = GrievanceView
