describe('#database', () => {
  describe('#getAllEvents', () => {
    describe('when the mock data is used', () => {
      // Arrange
      const mockData = require('./MOCK_DATA.json');
      let response;
      beforeEach(() => {
        // Act
        const { getAllEvents } = require('./index');
        response = getAllEvents();
      });
      // Assert
      it('then should map the mock data to eventData', () => {
        expect(response).toEqual(mockData);
      });
    });
  });
  describe('#getEventById', () => {
    describe('when the mock data is used', () => {
      describe('and the id is present', () => {
        // Arrange
        const id = 1;
        let response;
        beforeEach(() => {
          // Act
          const { getEventById } = require('./index');
          response = getEventById(id);
        });
        // Assert
        it('then should map the mock data to eventData', () => {
          expect(response).toEqual({
            id: 1,
            location: '43 Ridge Oak Drive',
            name: "Man Who Planted Trees, The (Homme qui plantait des arbres, L')",
            type: 'Animation|Drama',
          });
        });
      });
      describe('and the id is NOT present', () => {
        // Arrange
        const id = -1;
        let response;
        beforeEach(() => {
          // Act
          const { getEventById } = require('./index');
          response = getEventById(id);
        });
        // Assert
        it('then should map the mock data to eventData', () => {
          expect(response).toBeUndefined();
        });
      });
    });
  });
});
