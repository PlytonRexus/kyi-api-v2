const router = require('express').Router()

// router.use('', require('./home'))
// router.use('/search', require('./search'))
router.use('/users', require('./users'))

router.use('/login/oauth', require('../oauth/routes'))

router.use('/login', require('./login'))

module.exports = router
