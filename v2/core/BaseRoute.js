class BaseRoute {
  constructor (root, entity, controller, router) {
    this.router = require('express').Router()
    this.root = root
    this.entity = entity
    this.controller = controller
  }

  generateControllers () {
    // GET
    this.router.get(this.root + '/:id', this.controller.getOne)
    this.router.get(this.root, this.controller.getAll)

    // POST
    this.router.post(this.root, this.controller.addOne)

    // PATCH
    this.router.patch(this.root, this.controller.updateOne)

    // DELETE
    this.router.delete(this.root, this.controller.deleteOne)

    return this.router
  }
}

module.exports = BaseRoute
