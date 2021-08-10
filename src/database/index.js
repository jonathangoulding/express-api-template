const mockData = require('./MOCK_DATA.json');

const getAllEvents = () => mockData;

const getEventById = (id) => mockData.find((event) => event.id === Number(id));

module.exports = {
  getAllEvents,
  getEventById,
};
