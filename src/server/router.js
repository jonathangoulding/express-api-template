const express = require('express');

const eventRoute = require('../features/event/event.router');

const router = express.Router();

router.use('/events', eventRoute);

module.exports = router;
