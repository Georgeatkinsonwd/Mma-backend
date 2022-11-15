const express = require('express')
const router = express.Router()
const homeController = require('../controllers/homeController')



router.get('/getFighters', homeController.getFighters)

router.get('/getFighters/:weightClass',homeController.getWeightClass)

router.get('/getFighter/:id',homeController.getFighter)

router.post('/createFighter', homeController.createFighter)

router.put('/changeRank/:id', homeController.changeRank)

router.put('/changeAge/:id', homeController.changeAge)

router.put('/updateRecord/:id', homeController.updateRecord)

router.delete('/deleteFighter/:id', homeController.deleteFighter)


module.exports = router


