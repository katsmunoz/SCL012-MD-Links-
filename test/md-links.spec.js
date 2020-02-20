const fileLinks = require('../index.js');


test('fileLinks', done => {
  function callback(fileLinks) {
    try {
      expect(fileLinks).toBe('function');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

// probar promesas 

test('fileLinks', () => {
  return fetchData().then(fileLinks => {
    expect(fileLinks).toBe('function');
  });
});
