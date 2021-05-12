const router = require('express').Router()
const controller = require('./controller');

router.post('/access_token', controller.getAccessToken)

module.exports = router
