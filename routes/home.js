const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')



router.get('/getFighters', homeController.getFighters)

router.get('/getFighter/:id',homeController.getFighter)

router.post('/createFighter', homeController.createFighter)

router.put('/changeRank/:id', homeController.changeRank)

module.exports = router


