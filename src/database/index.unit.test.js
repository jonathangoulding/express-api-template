describe('#database', () => {
  describe('#getAllEvents', () => {
    describe('when the mock data is used', () => {
      // Arrange
      const mockData = 'mock-data';
      let response;
      beforeEach(() => {
        jest.mock('./MOCK_DATA.json', () => mockData);
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
        const mockData = [{ id: 1 }];
        let response;
        beforeEach(() => {
          jest.mock('./MOCK_DATA.json', () => mockData);
          // Act
          const { getEventById } = require('./index');
          response = getEventById(id);
        });
        // Assert
        it('then should map the mock data to eventData', () => {
          expect(response).toEqual({ id });
        });
      });
      describe('and the id is NOT present', () => {
        // Arrange
        const id = 2;
        const mockData = [{ id: 1 }];
        let response;
        beforeEach(() => {
          jest.mock('./MOCK_DATA.json', () => mockData);
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
