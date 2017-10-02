var request = require('supertest');
var app = require('../app.js');
 //this is a test
describe('GET /', function() {
  it('respond with hello world', function(done) {
    request(app).get('/').expect('hello jenkins', done);
  });
});