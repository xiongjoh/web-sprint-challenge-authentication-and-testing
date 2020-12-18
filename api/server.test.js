const request = require('supertest')
const server = require('./server')
const db = require('../data/dbConfig')

const user1 = {username:"Johnny", password:"hello"}
const user2 = {username:"foo", password:"bar"}

beforeAll( async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach( async () => {
  await db('users').truncate()
})
afterAll( async () => {
  await db.destroy()
})

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

describe('Able to use [POST]/api/auth/register', () => {
  it('responds with id,username,password on success', async () => {
    const res = await request(server).post('/api/auth/register').send(user1)
    expect(res.body).toHaveProperty('id')
    expect(res.body).toHaveProperty('username')
    expect(res.body).toHaveProperty('password')
  })
  it('responds with "username taken" on duplicate username', async () => {
    await request(server).post('/api/auth/register').send(user1)
    const res = await request(server).post('/api/auth/register').send(user1)
    expect(JSON.stringify(res.body)).toMatch(/username taken/)
  })
})

describe('Able to use [POST]/api/auth/login', () => {
  it('responds with message and token on success', async () => {
    await request(server).post('/api/auth/register').send(user1)
    const res = await request(server).post('/api/auth/login').send(user1)
    expect(res.body).toHaveProperty('message')
    expect(res.body).toHaveProperty('token')
  })
  it('responds with "invalid credentials" if wrong username/password', async () => {
    await request(server).post('/api/auth/register').send(user2)
    const res = await request(server).post('/api/auth/login').send(user1)
    expect(JSON.stringify(res.body)).toMatch(/invalid/)
  })

  describe('Restrictions for /api/jokes', () => {
    it('should be unable to access [GET]/api/jokes without login', async () => {
      const res = await request(server).get('/api/jokes')
      expect(JSON.stringify(res.body)).toMatch(/token/)
    })
    it('should be able to access [GET]/api/jokes after login/token', async () => {
      await request(server).post('/api/auth/register').send(user1)
      const user = await request(server).post('/api/auth/login').send(user1)
      const res = await request(server).get('/api/jokes').set({Authorization:user.body.token})
      expect(res.body).not.toHaveLength(0)
      expect(res.body[0]).toHaveProperty('joke')
      expect(res.body[0]).toHaveProperty('id')
    })
  })
})