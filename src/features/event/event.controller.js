const { getAllEvents, getEventById } = require('../../database');

const get = (req, res) => res.json(getAllEvents());

const getById = (req, res) => {
  const { id } = req.params;
  const itemById = getEventById(id);

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
