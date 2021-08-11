describe('event controller', () => {
  describe('get', () => {
    describe('when getting all events', () => {
      // Arrange
      const mockEventData = 'mock-data';
      let response;
      beforeEach(() => {
        jest.mock('../../database', () => ({
          getAllEvents: jest.fn().mockReturnValue(mockEventData),
        }));
        const req = {};
        const res = {
          json: (a) => a,
        };
        // Act
        const { get } = require('./event.controller');
        response = get(req, res);
      });

      // Assert
      it('then should return all the events', () => {
        expect(response).toEqual(mockEventData);
      });
    });
  });
  describe('getById', () => {
    describe('when getting an event by id', () => {
      // Arrange
      const id = 1;
      let response;
      const mockEventData = [{ id, name: 'fake event name' }];
      beforeEach(() => {
        jest.mock('../../database', () => ({
          getEventById: jest.fn().mockReturnValue(mockEventData),
        }));
        const req = {
          params: {
            id,
          },
        };
        const res = {
          json: (obj) => obj,
        };
        // Act
        const { getById } = require('./event.controller');
        response = getById(req, res);
      });

      // Assert
      it('then should return the matching event', () => {
        expect(response).toEqual(mockEventData);
      });
    });
    describe('when getting an event by an id that does not exist', () => {
      // Arrange
      const id = 1;
      let response;
      let mockEventData;
      beforeEach(() => {
        jest.mock('../../database', () => ({
          getEventById: jest.fn().mockReturnValue(mockEventData),
        }));
        const req = {
          params: {
            id,
          },
        };
        const res = {
          status: (status) => status,
          json: (obj) => obj,
        };
        // Act
        const { getById } = require('./event.controller');
        response = getById(req, res);
      });
      // Assert
      it('then should return not found', () => {
        expect(response).toEqual({
          message: 'Not Found',
        });
      });
    });
  });
});
