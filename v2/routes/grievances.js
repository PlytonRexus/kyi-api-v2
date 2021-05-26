// views, answers, upvote, downvote
// get-hot, get-popular, get-new, get-top-rated

const BaseRoute = require('../core/BaseRoute')
const grievancesController = require('../controllers/grievances')
const grievanceViewsRoutes = require('./grievanceViews')
const grievanceVotesRoutes = require('./grievanceVotes')

class GrievancesRoute extends BaseRoute {
  // TODO: Add routes mentioned at the top

  additionalControllers (router) {
    const r = router || this.router
    r.use('/views', grievanceViewsRoutes)
    r.use('/votes', grievanceVotesRoutes)
    return r
  }
}

const grievancesRoutes = new GrievancesRoute('/', grievancesController)
const router = grievancesRoutes.generateControllers()
module.exports = grievancesRoutes.additionalControllers(router)
