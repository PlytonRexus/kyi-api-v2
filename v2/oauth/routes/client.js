const clientController = require('../controllers/client')
const BaseRoute = require('../../core/BaseRoute')

class ClientRoute extends BaseRoute {
  generateControllers () {
    // POST
    this.router.post(this.root, this.controller.addOne)
    return this.router
  }
}

const clientRoutes = new ClientRoute('/', clientController, null)

module.exports = clientRoutes.generateControllers()
