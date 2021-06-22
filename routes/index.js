const router = require('express').Router()
const { register, login } = require('../controllers/userController')
const { AddCustomize, GetCustomize } = require('../controllers/customizeController')
const { AddProduct, GetProducts, DeleteProduct } = require('../controllers/productController')
const { AddMeasurement, GetMeasurements, DeleteMeasurement } = require('../controllers/measurementController')
const { AddFabric, GetFabrics, DeleteFabric } = require('../controllers/fabricController')
router.post('/register', register)
router.post('/login', login)

router.post('/customize', AddCustomize)
router.get('/customize', GetCustomize)


router.get('/measurement', GetMeasurements)
router.get('/fabric', GetFabrics)
router.get('/product', GetProducts)
router.delete('/product/:id', DeleteProduct)
router.delete('/fabric/:id', DeleteFabric)
router.delete('/measurement/:id', DeleteMeasurement)
router.post('/product', AddProduct)
router.post('/measurement', AddMeasurement)
router.post('/fabric', AddFabric)


module.exports = router