// views, answers, upvote, downvote
// get-hot, get-popular, get-new, get-top-rated

const BaseRoute = require('../core/BaseRoute')
const answersController = require('../controllers/answers')
const answerViewsRoutes = require('./answerViews')
const answerVotesRoutes = require('./answerVotes')

class AnswersRoute extends BaseRoute {
  additionalControllers (router) {
    // TODO: Add routes mentioned at the top
    let r = router || this.router
    r.use('/votes', answerVotesRoutes)
    r.use('/views', answerViewsRoutes)
    return r
  }
}

const answersRoutes = new AnswersRoute('/', answersController)
const router = answersRoutes.generateControllers()
module.exports = answersRoutes.additionalControllers(router)
