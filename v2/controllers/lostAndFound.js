const BaseController = require('../core/BaseController')
const LAFItem = require('../models/LostAndFoundItem')

class LAFController extends BaseController {
}

const lafController = new LAFController(LAFItem)

module.exports = lafController
