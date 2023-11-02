const request = require('supertest');
const express = require('express');
const html_Router = require('../../../routers/html');

const app = express();
app.use('/html', html_Router);


describe('HTML Routes', () => {
  it('should return data for the /html/:difficulty route', async () => {
    const difficulty = 'easy'; 
    const response = await request(app).get(`/html/${difficulty}`);
    expect(response.status).toBe(200);
  });

});