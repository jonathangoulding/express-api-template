describe('#router', () => {
  describe('when the path is /events', () => {
    // Arrange
    let eventRouter;
    let router;
    beforeEach(() => {
      jest.mock('express', () => ({
        Router: () => ({
          use: jest.fn(),
          get: jest.fn(),
        }),
      }));
      eventRouter = require('../features/event/event.router');
      jest.mock('../features/event/event.router', () => jest.fn());
      // Act
      router = require('./router');
    });
    // Assert
    it('then should call the get event controller', () => {
      expect(router.use).toHaveBeenCalledWith('/events', eventRouter);
    });
  });
});
