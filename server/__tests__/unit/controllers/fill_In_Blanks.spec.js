const FillInBlanks = require('../../../models/Fill_In_Blanks');
const { getAll, getAnswers } = require('../../../controllers/fill_In_Blanks');
const Fill_In_Blanks = require('../../../models/Fill_In_Blanks');

jest.mock('../../../models/Fill_In_Blanks');

describe('getAll', () => {
  it('should successfully get all fill-in-blanks questions with answers', async () => {
    const mockFillInBlanksData = [
      new Fill_In_Blanks({
        id: 1,
        question: 'Question 1',
      }),
      new Fill_In_Blanks({
        id: 2,
        question: 'Question 2',
      }),
    ];

    Fill_In_Blanks.getAll.mockResolvedValue(mockFillInBlanksData);

    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    await getAll(req, res);

    // Update your expectations to match the structure
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(mockFillInBlanksData);
  });
});


  // it('should handle errors when getting fill-in-blanks questions', async () => {
  //   Fill_In_Blanks.getAll.mockRejectedValue(new Error('Database error'));

  //   const req = {};
  //   const res = {
  //     status: jest.fn().mockReturnThis(),
  //     json: jest.fn(),
  //   };

  //   await getAll(req, res);

  //   expect(res.status).toHaveBeenCalledWith(500);
  //   expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
  // });


// describe('getAnswers', () => {
//   it('should successfully get answers for fill-in-blanks questions', async () => {
//     const mockAnswersData = [
//       { answer: 'Answer 1', is_correct: true },
//       { answer: 'Answer 2', is_correct: true },
//     ];

//     Fill_In_Blanks.getAnswers.mockResolvedValue(mockAnswersData);

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     await getAnswers(req, res);

//     expect(res.status).toHaveBeenCalledWith(200);
//     expect(res.json).toHaveBeenCalledWith(mockAnswersData);
//   });

//   it('should handle errors when getting answers for fill-in-blanks questions', async () => {
//     Fill_In_Blanks.getAnswers.mockRejectedValue(new Error('Database error'));

//     const req = {};
//     const res = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn(),
//     };

//     await getAnswers(req, res);

//     expect(res.status).toHaveBeenCalledWith(500);
//     expect(res.json).toHaveBeenCalledWith({ error: 'Database error' });
//   });
// });
