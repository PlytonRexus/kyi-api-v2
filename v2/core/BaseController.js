const debug = require('debug')('v2:BaseController')

const { handlePaging } = require('./BaseRequest')
const { GET_ALL_KEYS } = require('../constants/response')
const { OK, CREATED } = require('../constants/httpCodes')
const { compressImageBuffer } = require('../utils/content')
const BaseResponse = require('./BaseResponse')
const BaseExceptionHandler = require('./BaseExceptionHandler')
const KYIBadRequestException = require('../exceptions/KYIBadRequestException')

class BaseController {
  constructor (Entity) {
    this.Entity = Entity
  }

  getAll = async (req, res) => {
    const opts = handlePaging(req.query.skip, req.query.limit)
    try {
      const start = Date.now()
      const records = await this.Entity.find(
        req.filterQuery || {}, req.includeQuery, opts) || []
      const queryTime = Date.now() - start

      const rp =
        new BaseResponse(records, OK, { queryTime })
      res.status(rp.status).json(rp.getAllResponse)
    } catch (err) {
      debug(err)
      err = BaseExceptionHandler(err)
      res.status(err.code).json(err)
    }
  }

  getOne = async (req, res) => {
    try {
      const resource = await this.Entity.findById(req.params.id)
      const rp = new BaseResponse(resource, OK, {})
      res.status(rp.status).json(rp.getOneResponse)
    } catch (err) {
      debug(err)
      err = BaseExceptionHandler(err)
      res.status(err.code).json(err)
    }
  }

  addOne = async (req, res) => {
    try {
      const doc = new this.Entity(req.body)
      Object.keys(req.body).forEach(k => {
        if (typeof k === 'string' && k.includes('Id'))
          req.body[k] = req.body.replace(/"/g, '')
      })
      if (req.file) {
        doc.photo = await compressImageBuffer(req.file.buffer, req.file.mimetype)
        doc.photoFormat = req.file.mimetype
      }

      const resource = await doc.save()
      const rp = new BaseResponse(resource, CREATED, {})
      res.status(rp.status).json(rp.postResponse)
    } catch (err) {
      debug(err)
      err = BaseExceptionHandler(err)
      res.status(err.code).json(err)
    }
  }

  updateOne = async (req, res) => {
    try {
      const resource = await this.Entity.findOneAndUpdate({
        _id: req.params.id
      }, req.body, { new: true })
      const rp = new BaseResponse(resource, OK, {})
      res.status(rp.status).json(rp.patchResponse)
    } catch (err) {
      err = BaseExceptionHandler(err)
      res.status(err.code).json(err)
      debug(err)
    }
  }

  deleteOne = async (req, res) => {
    try {
      const resource = await this.Entity.findOneAndDelete({
        _id: req.params.id
      }, req.body)
      const rp = new BaseResponse(resource, OK, {})
      res.status(rp.status).json(rp.patchResponse)
    } catch (err) {
      err = BaseExceptionHandler(err)
      res.status(err.code).json(err)
      debug(err)
    }
  }

  getPhoto = async (req, res) => {
    try {
      const resource = await this.Entity.findById(req.params.id)
      if (resource && resource.photoURI)
        res.redirect(resource.photoURI)
      else if (!!resource) {
        res.type(resource.photoFormat)
        res.status(OK).send(resource.photo)
      } else throw new KYIBadRequestException({message: 'Not found', name: 'Resource not found'})
    } catch (err) {
      debug(err)
      err = BaseExceptionHandler(err)
      res.status(err.code).json(err)
    }
  }

}

module.exports = BaseController
