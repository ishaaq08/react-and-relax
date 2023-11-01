const logRoutes = require('../../../middleware/logger');

describe('logRoutes Middleware', () => {
  const originalLog = console.log;
  const logOutput = [];
  console.log = (message) => {
    logOutput.push(message);
  };

  const req = { method: 'GET', originalUrl: '/test' };
  const res = {};
  const next = jest.fn();

  it('should log the request method and original URL', () => {
    logRoutes(req, res, next);

    expect(logOutput).toContain("GET");
    expect(next).toBeCalled();
  });

  afterAll(() => {
    console.log = originalLog;
    logOutput.length = 0;
  });   
    
    
});
