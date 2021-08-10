describe('#database', () => {
  describe('when the mock data is used', () => {
    // Arrange
    const mockDataStub = 'mock-data';
    jest.mock('./MOCK_DATA.json', () => mockDataStub);
    // Act
    const { eventData } = require('./index');
    // Assert
    it('then should map the mock data to eventData', () => {
      expect(eventData).toEqual(mockDataStub);
    });
  });
});
