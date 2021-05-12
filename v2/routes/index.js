const router = require('express').Router()

// router.use('', require('./home'))
// router.use('/search', require('./search'))
router.use('/users', require('./users'))
router.use('/oauth', require('../oauth/routes'))

module.exports = router
