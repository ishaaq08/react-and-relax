const Fill_In_Blanks = require('../../../models/Fill_In_Blanks')
const db = require('../../../database/connect')

jest.mock('../../../database/connect');

beforeEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.resetAllMocks();
});

describe('Fill_In_Blanks', () => {
  describe('getAll', () => {
    it('should fetch and return all fill-in-blanks questions with answers', async () => {
      db.query.mockResolvedValue({
        rows: [
          { id: 1, question: 'Question 1' },
          { id: 2, question: 'Question 2' },
        ],
      });

      const result = await Fill_In_Blanks.getAll();

      expect(result).toEqual([
        { id: 1, question: 'Question 1', answers: [] },
        { id: 2, question: 'Question 2', answers: [] },
      ]);
    });

    it('should handle database errors', async () => {
      db.query.mockRejectedValue(new Error('Database error'));

      const result = await Fill_In_Blanks.getAll();

      expect(result).toEqual([]);
      expect(console.error).toHaveBeenCalledWith('Database error');
    });
  });

  describe('getAnswers', () => {
    it('should fetch and set answers for the fill-in-blanks question', async () => {
      db.query.mockResolvedValue({
        rows: [
          { question_id: 1, answer: 'Answer 1', is_correct: true },
          { question_id: 1, answer: 'Answer 2', is_correct: false },
        ],
      });

      const instance = new Fill_In_Blanks({ id: 1, question: 'Question 1' });
      await instance.getAnswers();

      expect(instance.answers).toEqual([
        { question_id: 1, answer: 'Answer 1', is_correct: true },
        { question_id: 1, answer: 'Answer 2', is_correct: false },
      ]);
    });

    it('should handle database errors', async () => {
      db.query.mockRejectedValue(new Error('Database error'));

      const instance = new Fill_In_Blanks({ id: 1, question: 'Question 1' });
      await instance.getAnswers();

      expect(instance.answers).toEqual([]);
      expect(console.error).toHaveBeenCalledWith('Database error');
    });
  });
});
