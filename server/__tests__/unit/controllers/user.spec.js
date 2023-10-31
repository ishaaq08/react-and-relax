const bcrypt = require('bcrypt');
const User = require('../../../models/User');
const Token = require('../../../models/Token');
const { register, login } = require('../../../controllers/user');

// Mock dependencies and their functions
jest.mock('bcrypt');
jest.mock('../../../models/User');
jest.mock('../../../models/Token');

describe('register', () => {
  it('should successfully register a user', async () => {
    // Mock request and response objects
    const req = {
      body: {
        username: 'testuser',
        password: 'testpassword',
        email: 'test@example.com',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    // Mock bcrypt functions
    bcrypt.genSalt.mockResolvedValue('salt');
    bcrypt.hash.mockResolvedValue('hashedPassword');

    // Mock User.create function
    User.create.mockResolvedValue({ id: 1, username: 'testuser', email: 'test@example.com' });

    await register(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({ id: 1, username: 'testuser', email: 'test@example.com' });
  });

  it('should handle registration errors', async () => {
    // Mock request and response objects
    const req = {
      body: {
        username: 'testuser',
        password: 'testpassword',
        email: 'test@example.com',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock bcrypt functions
    bcrypt.genSalt.mockRejectedValue(new Error('Bcrypt error'));

    await register(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Bcrypt error' });
  });
});

describe('login', () => {
  it('should successfully log in a user', async () => {
    // Mock request and response objects
    const req = {
      body: {
        username: 'testuser',
        password: 'testpassword',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock User.getOneByUsername function
    User.getOneByUsername.mockResolvedValue({
      id: 1,
      username: 'testuser',
      password: 'hashedPassword',
    });

    // Mock bcrypt compare function
    bcrypt.compare.mockResolvedValue(true);

    // Mock Token.create function
    Token.create.mockResolvedValue({ token: 'testToken' });

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ authenticated: true, token: 'testToken' });
  });

  it('should handle login errors', async () => {
    // Mock request and response objects
    const req = {
      body: {
        username: 'testuser',
        password: 'testpassword',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock User.getOneByUsername function
    User.getOneByUsername.mockRejectedValue(new Error('User not found'));

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
  });

  it('should handle incorrect credentials', async () => {
    // Mock request and response objects
    const req = {
      body: {
        username: 'testuser',
        password: 'testpassword',
      },
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    // Mock User.getOneByUsername function
    User.getOneByUsername.mockResolvedValue({
      id: 1,
      username: 'testuser',
      password: 'hashedPassword',
    });

    // Mock bcrypt compare function
    bcrypt.compare.mockResolvedValue(false);

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: 'Incorrect credentials.' });
  });
});
