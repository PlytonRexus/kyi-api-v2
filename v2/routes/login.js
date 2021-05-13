const router = require('express').Router()

const controller = require('../controllers/login')

router.get('', function(req, res) {
  // sendFile
})

router.post('/initialise', controller.initialiseSystemLoginFlow)

router.post('/access_token', controller.verifySystemOTP)

module.exports = router
