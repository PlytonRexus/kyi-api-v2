// get-hot, get-popular, get-new, get-top-rated

const BaseRoute = require('../core/BaseRoute')
const answerViewsController = require('../controllers/answerViews')

class AnswerViewsRoute extends BaseRoute {
  additionalControllers () {
    // TODO: Add routes mentioned at the top
    super.additionalControllers()
  }
}

const answerViewsRoutes = new AnswerViewsRoute('/', answerViewsController)
module.exports = answerViewsRoutes.generateControllers()
