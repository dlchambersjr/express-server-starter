import supertest from 'supertest';

import { app, startDB, stopDB } from '../src/server.js';

const mockRequest = supertest(app);


// Hooks for Jest
beforeAll(startDB);

afterAll(stopDB);

afterEach(async () => {

});

describe('Test the API', () => {

  it('should return Hello World', async () => {

    const response =
      await mockRequest.get('/');

    console.log(response.text);

    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World');
  });

});
