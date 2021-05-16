// grievanceId, userId, up or down
const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')

const VoteSchemaDefinition = require('./schemas/voteSchema')
const BaseModelOptions = require('../core/BaseModelOptions'),
  opts = new BaseModelOptions()

const schema = new mongoose.Schema(new VoteSchemaDefinition('Grievance'), opts.schemaOptions)
schema.plugin(safeDelete, opts.safeDeleteOptions)

const GrievanceVote = mongoose.model('GrievanceVote', schema, 'grievance_votes')
module.exports = GrievanceVote
