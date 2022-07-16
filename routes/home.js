const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')



router.get('/getFighters', homeController.getFighters)

router.post('/createFighter', homeController.createFighter)

module.exports = router


