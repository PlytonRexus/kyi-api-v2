const BaseController = require('../core/BaseController')
const AnswerView = require('../models/AnswerView')

class AnswerViewsController extends BaseController {
}

const answerViewsController = new AnswerViewsController(AnswerView)

module.exports = answerViewsController
