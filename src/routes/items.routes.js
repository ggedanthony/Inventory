const express = require('express');
const router = express.Router();
const itemController = require('../controllers/items.controller');

router.post('/', itemController.create);

router.get('/', itemController.findAll);


module.exports = router;