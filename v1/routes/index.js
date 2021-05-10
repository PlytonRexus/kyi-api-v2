const router = require ('express').Router();

router.use('', require('./home'))
router.use('/search', require('./search'))
router.use('/students', require('./student'))
router.use('/apps', require('./app'))
router.use('/devs', require('./dev'))
router.use('/locations', require('./locations'))
router.use('/shorts', require('./shorts'))
router.use('/reviews', require('./reviews'))

module.exports = router;
