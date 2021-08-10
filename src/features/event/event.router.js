const express = require('express');
const eventController = require('./event.controller');

const router = express.Router();

router.get('/', eventController.get);
router.get('/:id', eventController.getById);

module.exports = router;
