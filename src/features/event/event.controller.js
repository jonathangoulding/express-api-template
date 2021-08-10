const { eventData } = require('../../database');

const get = (req, res) => res.json(eventData);

const getById = (req, res) => {
  const { id } = req.params;
  const itemById = eventData.find((event) => event.id === Number(id));

  if (itemById === undefined) {
    res.status(404);
    return res.json({ message: 'Not Found' });
  }
  return res.json(itemById);
};

module.exports = {
  get,
  getById,
};
