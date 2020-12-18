const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

// Write your tests here
test('sanity', () => {
  expect(true).toBe(true)
})

describe('Server is up', () => {
  it('responds with 200 if it is up', async () => {
    const res = await request(server).get('/')
    expect(res.status).toBe(200)
  })
})