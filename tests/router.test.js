const routes = require('../routes/router')
const request = require('supertest')
const cheerio = require('cheerio')

test('Router test is working', () => expect(true).toBe(true))

test('test 2', (done) => {
  request(routes)
    .get('/')
    .expect(200)
    .end((err, res) => {
      expect(err).toBeNull()
      expect(actual).toBe(1)
      done()
    })
})
