// grievanceId, userId, up or down
const mongoose = require('mongoose')
const safeDelete = require('mongoose-delete')

const VoteSchemaDefinition = require('./schemas/voteSchema')
const BaseModelOptions = require('../core/BaseModelOptions')
const opts = new BaseModelOptions()

const schema = new mongoose.Schema(new VoteSchemaDefinition('Answer'), opts.schemaOptions)

schema.plugin(safeDelete, opts.safeDeleteOptions)

const AnswerVote = mongoose.model('AnswerVote', schema, 'grievance_votes')
module.exports = AnswerVote
