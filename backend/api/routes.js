
const router = require('express').Router();

router.use('/auth', require('../modules/auth/routes'));
router.use('/orders', require('../modules/orders/routes'));

module.exports = router;
