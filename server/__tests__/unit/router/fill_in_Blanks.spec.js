const request = require('supertest');
const express = require('express');
const fill_In_Blanks_Router = require('../../../routers/fill_In_Blanks');

const app = express();
app.use('/fill-in-blanks', fill_In_Blanks_Router);

describe('Fill In Blanks Routes', () => {
  it('should return all data for the /fill-in-blanks route', async () => {
    const response = await request(app).get('/fill-in-blanks');
    expect(response.status).toBe(200);
  });

//   it('should return answers for the /fill-in-blanks/answers route', async () => {
//     const response = await request(app).get('/fill-in-blanks/answers');
//     expect(response.status).toBe(200);
//   });
});