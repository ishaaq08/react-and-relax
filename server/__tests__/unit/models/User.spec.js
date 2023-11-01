const User = require('../../../models/User')
const db = require('../../../database/connect');

jest.mock('../../../database/connect');

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.resetAllMocks();
});

describe('User', () => {
  describe('getOneById', () => {
    it('should fetch and return a user by their ID', async () => {
      const mockResponse = {
        rows: [
          { id: 1, username: 'user1', password: 'password1', email: 'user1@example.com' },
        ],
      };

      db.query.mockResolvedValue(mockResponse);

      const user = await User.getOneById(1);

      expect(user).toEqual(
        new User({
          id: 1,
          username: 'user1',
          password: 'password1',
          email: 'user1@example.com',
        })
      );
    });

    it('should handle cases when the user is not found', async () => {
      db.query.mockResolvedValue({ rows: [] });

      await expect(User.getOneById(1)).rejects.toThrow('Unable to locate user.');
    });

    it('should handle database errors', async () => {
      db.query.mockRejectedValue(new Error('Database error'));

      await expect(User.getOneById(1)).rejects.toThrow('Database error');
    });
  });

  describe('getOneByUsername', () => {
    it('should fetch and return a user by their username', async () => {
      const mockResponse = {
        rows: [
          { id: 1, username: 'user1', password: 'password1', email: 'user1@example.com' },
        ],
      };

      db.query.mockResolvedValue(mockResponse);

      const user = await User.getOneByUsername('user1');

      expect(user).toEqual(
        new User({
          id: 1,
          username: 'user1',
          password: 'password1',
          email: 'user1@example.com',
        })
      );
    });

    it('should handle cases when the user is not found', async () => {
      db.query.mockResolvedValue({ rows: [] });

      await expect(User.getOneByUsername('nonexistent-user')).rejects.toThrow('Unable to locate user.');
    });

    it('should handle database errors', async () => {
      db.query.mockRejectedValue(new Error('Database error'));

      await expect(User.getOneByUsername('user1')).rejects.toThrow('Database error');
    });
  });

    describe('getOneByEmail', () => {
        it('should fetch and return a user by their email', async () => {
            const mockResponse = {
                rows: [
                    { id: 1, username: 'user1', password: 'password1', email: 'user1@example.com' },
                ],
            };

            db.query.mockResolvedValue(mockResponse);

            const user = await User.getOneByEmail('user1@example.com');

            expect(user).toEqual(
                new User({
                    id: 1,
                    username: 'user1',
                    password: 'password1',
                    email: 'user1@example.com',
                })
            );
        });

        it('should handle cases when the user is not found', async () => {
            db.query.mockResolvedValue({ rows: [] });

            await expect(User.getOneByEmail('nonexistent-email@example.com')).rejects.toThrow('Unable to locate user.');
        });

        it('should handle database errors', async () => {
            db.query.mockRejectedValue(new Error('Database error'));

            await expect(User.getOneByEmail('user1@example.com')).rejects.toThrow('Database error');
        });
    });
    });
