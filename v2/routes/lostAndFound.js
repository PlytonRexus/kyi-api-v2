const BaseRoute = require('../core/BaseRoute')
const lafController = require('../controllers/lostAndFound')

class LAFRoute extends BaseRoute {}

const lafRoutes = new LAFRoute('/', lafController)

module.exports = lafRoutes.generateControllers()
