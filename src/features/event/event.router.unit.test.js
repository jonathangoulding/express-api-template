describe('# event router', () => {
  describe('when the path is /', () => {
    // Arrange
    let eventController;
    let eventRouter;
    beforeEach(() => {
      jest.mock('express', () => ({
        Router: () => ({
          get: jest.fn(),
        }),
      }));

      eventController = require('./event.controller');
      eventController.get = jest.fn();
      // Act
      eventRouter = require('./event.router');
    });
    // Assert
    it('then should call the get event controller', () => {
      expect(eventRouter.get).toHaveBeenCalledWith('/', eventController.get);
    });
  });
  describe('when the path is /:id', () => {
    // Arrange
    let eventController;
    let eventRouter;
    beforeEach(() => {
      jest.mock('express', () => ({
        Router: () => ({
          get: jest.fn(),
        }),
      }));

      eventController = require('./event.controller');
      eventController.getById = jest.fn();
      // Act
      eventRouter = require('./event.router');
    });
    // Assert
    it('then should call the get event controller', () => {
      expect(eventRouter.get).toHaveBeenCalledWith('/:id', eventController.getById);
    });
  });
});
