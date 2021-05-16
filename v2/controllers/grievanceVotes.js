const BaseController = require('../core/BaseController')
const GrievanceVote = require('../models/GrievanceVote')

class GrievanceVotesController extends BaseController {
}

const grievanceVotesController = new GrievanceVotesController(GrievanceVote)

module.exports = grievanceVotesController
