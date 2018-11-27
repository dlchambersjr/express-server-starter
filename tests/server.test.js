import { startDB, stopDB } from '../src/server.js';

describe('Test the server', () => {

  it('should start', () => {

    const actual = startDB();

    expect(actual).toBeDefined();

  });

  it('should stop', () => {

    startDB(); //Start the server so we have something to stop

    const actual = stopDB();

    expect(actual).toBeUndefined();

  });

});