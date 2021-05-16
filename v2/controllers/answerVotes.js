const BaseController = require('../core/BaseController')
const AnswerVote = require('../models/AnswerVote')

class AnswerVotesController extends BaseController {
}

const answerVotesController = new AnswerVotesController(AnswerVote)

module.exports = answerVotesController
