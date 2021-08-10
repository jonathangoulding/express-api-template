describe('event controller', () => {
  describe('get', () => {
    describe('when getting all events', () => {
      // Arrange
      const mockEventData = 'mock-data';
      jest.mock('../../database', () => ({
        getAllEvents: jest.fn().mockReturnValue(mockEventData),
      }));
      const req = {};
      const res = {
        json: (a) => a,
      };
      // Act
      const { get } = require('./event.controller');
      const response = get(req, res);
      // Assert
      it('then should return all the events', () => {
        expect(response).toEqual(mockEventData);
      });
    });
  });
});
