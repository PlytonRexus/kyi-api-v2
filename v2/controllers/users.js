const BaseController = require('../core/BaseController')
const User = require('../models/User')

class Users extends BaseController {

}

const usersController = new Users(User)

module.exports = usersController
