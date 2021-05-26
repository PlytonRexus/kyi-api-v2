const router = require('express').Router()
const controller = require('../controllers/login')

router.get('/authorise', controller.loadLoginScreen)

router.post('/initialise', controller.initLoginFlow)

router.post('/request_token', controller.verifyOtp)

router.post('/access_token', controller.getAccessToken)

module.exports = router
