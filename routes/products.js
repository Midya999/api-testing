const express = require('express');
const router = express.Router();
const {getAllProducts, getAllProductsTesting} = require('../controllers/products');
router.route('/').get(getAllProducts) ;
router.route('/testing').post(getAllProductsTesting) ;
module.exports = router;