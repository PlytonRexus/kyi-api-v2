const router = require('express').Router()
const path = require('path')
const BaseResponse = require('../core/BaseResponse')
const { readFile } = require('../utils/files')
const { OK } = require('../constants/httpCodes')

router.get('/', async function (req, res) {
  const json = await readFile(path.join(__dirname, '..', 'resources/seeddata/json', 'clubs.json'))
  const resource = JSON.parse(json)
  const rp = new BaseResponse(resource, OK, {})
  res.status(rp.status).json(rp.getAllResponse)
})

module.exports = router
