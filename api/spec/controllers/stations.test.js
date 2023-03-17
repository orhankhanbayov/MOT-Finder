const app = require('../../app');
const request = require('supertest');
require('../mongodb_helper');

const Station = require('../../models/station');

describe('/stations', () => {
  describe('GET', () => {
    it('returns 200 with correct lat and long', async () => {
      let response = await request(app)
        .get('/stations')
        .send({ lat: 57.135, long: -2.0954 });
      expect(response.status).toBe(200);
      console.log(response.body);
    });
  });
});
