// get-hot, get-popular

const BaseRoute = require('../core/BaseRoute')
const grievanceViewsController = require('../controllers/grievanceViews')

class GrievanceViewsRoute extends BaseRoute {
  additionalControllers () {
    // TODO: Add routes mentioned at the top
    super.additionalControllers();
  }
}

const grievanceViewsRoutes = new GrievanceViewsRoute('/', grievanceViewsController)
module.exports = grievanceViewsRoutes.generateControllers()
