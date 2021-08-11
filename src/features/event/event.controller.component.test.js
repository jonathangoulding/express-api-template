describe('event controller', () => {
  describe('get', () => {
    describe('when getting all events', () => {
      // Arrange
      const eventData = require('../../database/MOCK_DATA.json');
      const req = {};
      const res = {
        json: (obj) => obj,
      };
      // Act
      const { get } = require('./event.controller');
      const response = get(req, res);
      // Assert
      it('then should return all the events', () => {
        expect(response).toEqual(eventData);
      });
    });
  });

  describe('getById', () => {
    describe('when getting an event by id', () => {
      // Arrange
      const id = 1;
      let response;
      beforeEach(() => {
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
      it('then should return all the events', () => {
        expect(response).toEqual({
          id: 1,
          location: '43 Ridge Oak Drive',
          name: "Man Who Planted Trees, The (Homme qui plantait des arbres, L')",
          type: 'Animation|Drama',
        });
      });
    });
    describe('when getting an event by an id that does not exist', () => {
      // Arrange
      const id = -1;
      let response;
      beforeEach(() => {
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
      it('then should return all the events', () => {
        expect(response).toEqual({
          message: 'Not Found',
        });
      });
    });
  });
});
