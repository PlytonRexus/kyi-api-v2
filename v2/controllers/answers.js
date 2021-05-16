const BaseController = require('../core/BaseController')
const Answer = require('../models/Answer')

class AnswersController extends BaseController {
}

const grievancesController = new AnswersController(Answer)

module.exports = grievancesController
