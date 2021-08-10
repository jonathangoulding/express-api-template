describe('#database', () => {
  describe('#getAllEvents', () => {
    describe('when the mock data is used', () => {
      // Arrange
      const mockDataStub = 'mock-data';
      let response;
      beforeEach(() => {
        jest.mock('./MOCK_DATA.json', () => mockDataStub);
        // Act
        const { getAllEvents } = require('./index');
        response = getAllEvents();
      });
      // Assert
      it('then should map the mock data to eventData', () => {
        expect(response).toEqual(mockDataStub);
      });
    });
  });
  describe.skip('#getEventById', () => {
    describe('when the mock data is used', () => {
      // Arrange
      const id = 1;
      const mockDataStub = [{ id: 1 }];
      let response;
      beforeEach(() => {
        jest.mock('./MOCK_DATA.json', () => mockDataStub);
        // Act
        const { getEventById } = require('./index');
        response = getEventById(id);
      });
      // Assert
      it('then should map the mock data to eventData', () => {
        expect(response).toEqual({ id });
      });
    });
  });
});
