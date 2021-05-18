const path = require('path')
const BaseResponse = require('../core/BaseResponse')
const { readFile } = require('../utils/files')
const { OK } = require('../constants/httpCodes')
const router = require('express').Router()

// router.use('', require('./home'))
// router.use('/search', require('./search'))
router.use('/users', require('./users'))

router.use('/clients', require('../oauth/routes/client'))

router.use('/grievances', require('./grievances'))

router.use('/answers', require('./answers'))

router.use('/laf', require('./lostAndFound'))

router.use('/login/oauth', require('../oauth/routes/login'))

router.use('/login/system', require('./login'))

router.get('/clubs', async function (req, res) {
  const json = await readFile(path.join(__dirname, '..', 'resources/seeddata/json', 'clubs.json'))
  const resource = JSON.parse(json)
  const rp = new BaseResponse(resource, OK, {})
  res.status(rp.status).json(rp.getAllResponse)
})

module.exports = router
