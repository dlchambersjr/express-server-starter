import supertest from 'supertest';

import { app, startDB, stopDB } from '../src/server.js';

const mockRequest = supertest(app);


// Hooks for Jest
beforeAll(startDB);

afterAll(stopDB);

describe('Test the API', () => {

  it('GET should return Hello World', async () => {

    const response = await mockRequest.get('/');

    const actual = response.text;
    const status = response.status;

    expect(actual).toBe('Hello World');
    expect(status).toBe(200);

  });

});

