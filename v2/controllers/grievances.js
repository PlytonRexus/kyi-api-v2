const BaseController = require('../core/BaseController')
const Grievance = require('../models/Grievance')
const BaseResponse = require('../core/BaseResponse')
const BaseExceptionHandler = require('../core/BaseExceptionHandler')
const BaseRequest = require('../core/BaseRequest')
const { OK } = require('../constants/httpCodes')
const { GET_ALL_KEYS } = require('../constants/response')

class GrievancesController extends BaseController {
  getAll = async (req, res) => {
    const opts = BaseRequest.handlePaging(req.query.skip, req.query.limit)
    try {
      const start = Date.now()
      let records = await this.Entity.find(
        req.filterQuery || {}, req.includeQuery || null, opts) || []
      const queryTime = Date.now() - start
      await Promise.allSettled(records.map(r => r.populate('userId').execPopulate()))

      const rp =
        new BaseResponse(records, OK, { queryTime })
      res.status(rp.status).json(rp.getAllResponse)
    } catch (err) {
      err = BaseExceptionHandler(err)
      res.status(err.code).json(err)
    }
  }
}

const grievancesController = new GrievancesController(Grievance)

module.exports = grievancesController
