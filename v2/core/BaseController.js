const debug = require('debug')('v2:BaseController')

const { handlePaging } = require('./BaseRequest')
const { GET_ALL_KEYS } = require('../constants/response')
const { OK, CREATED } = require('../constants/httpCodes')
const { compressImageBuffer } = require('../utils/content')
const BaseResponse = require('./BaseResponse')

class BaseController {
  constructor (Entity) {
    this.Entity = Entity
  }

  getAll = async (req, res) => {
    const opts = handlePaging(req.query.skip, req.query.limit)
    try {
      const start = Date.now()
      const records = await this.Entity.find({}, GET_ALL_KEYS, opts) || []
      const queryTime = Date.now() - start

      const rp =
        new BaseResponse(records, OK, { queryTime })
      res.status(rp.status).json(rp.getAllResponse)
    } catch (err) {
      debug(err)
      // TODO: Error classes
      res.status(500).json(err)
    }
  }

  getOne = async (req, res) => {
    try {
      const resource = await this.Entity.findById(req.params.id)
      const rp = new BaseResponse(resource, OK, {})
      res.status(rp.status).json(rp.getOneResponse)
    } catch (err) {
      // TODO: Error classes
      res.status(500).json(err)
    }
  }

  addOne = async (req, res) => {
    try {
      const doc = new this.Entity(req.body)
      if (req.file) {
        doc.photo = await compressImageBuffer(req.file.buffer, req.file.mimetype)
        doc.format = req.file.mimetype
      }

      const resource = await doc.save()
      const rp = new BaseResponse(resource, CREATED, {})
      res.status(rp.status).json(rp.postResponse)
    } catch (err) {
      debug(err)
      res.status(500).json(err)
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
      res.status(500).json(err)
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
      res.status(500).json(err)
      debug(err)
    }
  }
}

module.exports = BaseController
