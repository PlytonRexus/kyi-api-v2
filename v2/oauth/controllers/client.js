const Client = require('../models/Client')
const BaseController = require('../../core/BaseController')

class ClientController extends BaseController {
}
const clientController = new ClientController(Client)
module.exports = clientController
