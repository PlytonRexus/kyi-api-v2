// get-top-rated

const BaseRoute = require('../core/BaseRoute')
const grievanceVotesController = require('../controllers/grievanceVotes')

class GrievanceVotesRoute extends BaseRoute {
  additionalControllers () {
    // TODO: Add routes mentioned at the top
    super.additionalControllers();
  }
}

const grievanceVotesRoutes = new GrievanceVotesRoute('/', grievanceVotesController)
module.exports = grievanceVotesRoutes.generateControllers()
