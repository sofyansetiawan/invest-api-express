const router = require('express').Router()
const ProfitController = require('../controllers/profit')

router.get('/', (req, res) => res.status(200).json({ msg: 'Welcome to My program' }))

router.post('/profit', ProfitController.countProfit)

module.exports = router