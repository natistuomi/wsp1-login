const app = require('../app');
const request = require('supertest');
const pool = require('../utils/database');

describe('2. Login', () => {
    describe('GET /login', () => {
        it('should return a 200 response', async () => {
            expect.assertions(1);
            const response = await request(app).get('/login');
            expect(response.statusCode).toBe(200);
        });
        it('should return a html response with a login form', async () => {
            expect.assertions(1);
            const response = await request(app).get('/login');
            expect(response.text).toContain('<form action="/login" method="POST"');
        });
        it('should return a html response with a username field', async () => {
            expect.assertions(1);
            const response = await request(app).get('/login');
            expect(response.text).toContain('<input type="text" name="username"');
        });
        it('should return a html response with a password field', async () => {
            expect.assertions(1);
            const response = await request(app).get('/login');
            expect(response.text).toContain(
                '<input type="password" name="password"',
            );
        });
        it('should return a html response with a submit button', async () => {
            expect.assertions(1);
            const response = await request(app).get('/login');
            expect(response.text).toContain('<button type="submit">Login</button>');
        });
    });
    describe('POST /login', () => {
        it('should give an error with empty credential fields', async () => {
            expect.assertions(2);
            const response = await request(app)
                .post('/login')
                .send({ username: '', password: '' });
            expect(response.statusCode).toBe(200);
            expect(response.text).toContain('Username is Required');
        });
        it('should give an error with empty username field', async () => {
            expect.assertions(2);
            const response = await request(app)
                .post('/login')
                .send({ username: '', password: 'asdf' });
            expect(response.statusCode).toBe(200);
            expect(response.text).toContain('Username is Required');
        });
        it('should give an error with empty password field', async () => {
            expect.assertions(2);
            const response = await request(app)
                .post('/login')
                .send({ username: 'test', password: '' });
            expect(response.statusCode).toBe(200);
            expect(response.text).toContain('Password is Required');
        });
        it('should login an user with correct credentials', async () => {
            expect.assertions(2);
            const response = await request(app)
            .post('/login')
            .send({ username: 'test', password: 'test' });
            expect(response.statusCode).toBe(302);
            expect(response.header.location).toBe('/profile');
        });
        it('should not login an user with incorrect credentials', async () => {
            expect.assertions(2);
            const response = await request(app)
                .post('/login')
                .send({ username: 'test', password: 'wrong' });
            expect(response.statusCode).toBe(200);
            expect(response.text).toContain('Invalid username or password');
        });
    });
    afterAll(async () => {
        await pool.end();
    });
});