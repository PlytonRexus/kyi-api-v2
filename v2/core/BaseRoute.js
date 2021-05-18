const { parseRequest } = require('../utils/middleware')

class BaseRoute {
  constructor (root, controller, router) {
    this.router = require('express').Router()
    this.root = root || "/"
    this.controller = controller
    this.entity = controller.Entity
  }

  generateControllers () {
    // GET
    this.router.get(this.root + ':id', parseRequest, this.controller.getOne)
    this.router.get(this.root, parseRequest, this.controller.getAll)

    // POST
    this.router.post(this.root, this.controller.addOne)

    // PATCH
    this.router.patch(this.root + '/:id', this.controller.updateOne)

    // DELETE
    this.router.delete(this.root + '/:id', this.controller.deleteOne)

    return this.router
  }

  additionalControllers() {

  }

}

module.exports = BaseRoute
