const Token = require('../../../models/Token');
const db = require('../../../database/connect');

jest.mock('../../../database/connect');

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.resetAllMocks();
});

describe('Token', () => {
  describe('create', () => {
    it('should create and return a new token', async () => {
      // Mock the database query function
      const mockUuid = 'mocked-uuid';
      const mockResponse = {
        rows: [{ token_id: 1, user_id: 1, token: mockUuid }],
      };

      db.query.mockResolvedValue(mockResponse);

      const newToken = await Token.create(1);

      expect(newToken).toEqual(
        new Token({
          token_id: 1,
          user_id: 1,
          token: mockUuid,
        })
      );
    });

    it('should handle database errors', async () => {
      // Mock the database query function to simulate an error
      db.query.mockRejectedValue(new Error('Database error'));

      // Make sure the function throws an error
      await expect(Token.create(1)).rejects.toThrow('Database error');
    });
  });

  describe('getOneById', () => {
    it('should fetch and return a token by its ID', async () => {
      // Mock the database query function
      const mockResponse = {
        rows: [{ token_id: 1, user_id: 1, token: 'token-1' }],
      };

      db.query.mockResolvedValue(mockResponse);

      const token = await Token.getOneById(1);

      expect(token).toEqual(
        new Token({
          token_id: 1,
          user_id: 1,
          token: 'token-1',
        })
      );
    });

    it('should handle cases when the token is not found', async () => {
      // Mock the database query function to return an empty result
      db.query.mockResolvedValue({ rows: [] });

      // Make sure the function throws an error
      await expect(Token.getOneById(1)).rejects.toThrow('Unable to locate token.');
    });

    it('should handle database errors', async () => {
      // Mock the database query function to simulate an error
      db.query.mockRejectedValue(new Error('Database error'));

      // Make sure the function throws an error
      await expect(Token.getOneById(1)).rejects.toThrow('Database error');
    });
  });

  describe('getOneByToken', () => {
    it('should fetch and return a token by its token value', async () => {
      // Mock the database query function
      const mockResponse = {
        rows: [{ token_id: 1, user_id: 1, token: 'token-1' }],
      };

      db.query.mockResolvedValue(mockResponse);

      const token = await Token.getOneByToken('token-1');

      expect(token).toEqual(
        new Token({
          token_id: 1,
          user_id: 1,
          token: 'token-1',
        })
      );
    });

    it('should handle cases when the token is not found', async () => {
      // Mock the database query function to return an empty result
      db.query.mockResolvedValue({ rows: [] });

      // Make sure the function throws an error
      await expect(Token.getOneByToken('nonexistent-token')).rejects.toThrow('Unable to locate token.');
    });

    it('should handle database errors', async () => {
      // Mock the database query function to simulate an error
      db.query.mockRejectedValue(new Error('Database error'));

      // Make sure the function throws an error
      await expect(Token.getOneByToken('token-1')).rejects.toThrow('Database error');
    });
  });
});
