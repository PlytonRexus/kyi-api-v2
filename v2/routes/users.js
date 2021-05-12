const BaseRoute = require('../core/BaseRoute')
const usersController = require('../controllers/users')

class Users extends BaseRoute {
}

const usersRoutes = new Users(
  '/users', usersController, null)

module.exports = usersRoutes.generateControllers()
