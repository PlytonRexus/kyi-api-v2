const BaseController = require('../core/BaseController')
const GrievanceView = require('../models/GrievanceView')

class GrievanceViewsController extends BaseController {
}

const grievanceViewsController = new GrievanceViewsController(GrievanceView)

module.exports = grievanceViewsController
