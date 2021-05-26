// get-hot, get-popular, get-new, get-top-rated

const BaseRoute = require('../core/BaseRoute')
const answerVotesController = require('../controllers/answerVotes')

class AnswerVotesRoute extends BaseRoute {
  additionalControllers () {
    // TODO: Add routes mentioned at the top
    super.additionalControllers()
  }
}

const answerVotesRoutes = new AnswerVotesRoute('/', answerVotesController)
module.exports = answerVotesRoutes.generateControllers()
