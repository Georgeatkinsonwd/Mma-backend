const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')



router.get('/getFighters', homeController.getFighters)

module.exports = router


