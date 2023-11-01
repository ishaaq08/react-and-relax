const db = require('../../../database/connect'); 

jest.mock('../../../database/connect', () => {
  return {
    query: jest.fn(),
  };
});

const Fill_In_Blanks = require('../../../models/Fill_In_Blanks');

describe('Fill_In_Blanks', () => {
  describe('getAll', () => {
    it('should return all fill-in-blanks questions with answers', async () => {
      const expectedRows = [
        { id: 1, question: 'Question 1' },
        { id: 2, question: 'Question 2' },
      ];
      db.query.mockResolvedValue({ rows: expectedRows });

      const result = await Fill_In_Blanks.getAll();

      expect(db.query).toHaveBeenCalledWith('SELECT * FROM fill_in_blanks');
      expect(result).toHaveLength(expectedRows.length);

      for (let i = 0; i < expectedRows.length; i++) {
        expect(result[i]).toBeInstanceOf(Fill_In_Blanks);
        expect(result[i].id).toEqual(expectedRows[i].id);
        expect(result[i].question).toEqual(expectedRows[i].question);
      }
        });
    });
});
