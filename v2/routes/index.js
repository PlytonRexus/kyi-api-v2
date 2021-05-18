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

module.exports = router
