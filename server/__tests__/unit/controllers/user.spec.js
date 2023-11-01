const bcrypt = require('bcrypt');
const User = require('../../../models/User');
const Token = require('../../../models/Token');
const { register, login } = require('../../../controllers/user');

jest.mock('bcrypt');
jest.mock('../../../models/User');
jest.mock('../../../models/Token');

describe('register', () => {
  it('should successfully register a user', async () => {
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

    bcrypt.genSalt.mockResolvedValue('salt');
    bcrypt.hash.mockResolvedValue('hashedPassword');

    User.create.mockResolvedValue({ id: 1, username: 'testuser', email: 'test@example.com' });

    await register(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith({ id: 1, username: 'testuser', email: 'test@example.com' });
  });

  it('should handle registration errors', async () => {
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

    bcrypt.genSalt.mockRejectedValue(new Error('Bcrypt error'));

    await register(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Bcrypt error' });
  });
});

describe('login', () => {
  it('should successfully log in a user', async () => {
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

    User.getOneByUsername.mockResolvedValue({
      id: 1,
      username: 'testuser',
      password: 'hashedPassword',
    });

    bcrypt.compare.mockResolvedValue(true);

    Token.create.mockResolvedValue({ token: 'testToken' });

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ authenticated: true, token: 'testToken' });
  });

  it('should handle login errors', async () => {
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

    User.getOneByUsername.mockRejectedValue(new Error('User not found'));

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: 'User not found' });
  });

  it('should handle incorrect credentials', async () => {
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

    User.getOneByUsername.mockResolvedValue({
      id: 1,
      username: 'testuser',
      password: 'hashedPassword',
    });

    bcrypt.compare.mockResolvedValue(false);

    await login(req, res);

    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: 'Incorrect credentials.' });
  });
});
