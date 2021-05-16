const BaseController = require('../core/BaseController')
const Grievance = require('../models/Grievance')

class GrievancesController extends BaseController {
}

const grievancesController = new GrievancesController(Grievance)

module.exports = grievancesController
