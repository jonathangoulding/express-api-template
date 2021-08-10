const eventRoute = require('../features/event/event.router');

module.exports = (app) => {
  app.use('/events', eventRoute);
};
