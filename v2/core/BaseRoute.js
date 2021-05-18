const multer = require('multer')
const { parseRequest } = require('../utils/middleware')

class BaseRoute {
  constructor (root, controller, router) {
    this.router = require('express').Router()
    this.root = root || "/"
    this.controller = controller
    this.entity = controller.Entity
  }

  generateControllers () {

    const fileFilter = function fileFilter (req, file, callback) {
      if (file.mimetype === 'image/jpeg'
        || file.mimetype === 'image/tiff'
        || file.mimetype === 'image/png') callback(null, true)
      else {
        callback(null, false)
      }
    }

    const upload = multer({ limits: { fileSize: 5242880 }, fileFilter })
    // GET
    this.router.get(this.root + ':id', parseRequest, this.controller.getOne)
    this.router.get(this.root, parseRequest, this.controller.getAll)
    this.router.get(this.root + ':id/photo', this.controller.getPhoto)

    // POST
    this.router.post(this.root, upload.single('photo'), this.controller.addOne)

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
