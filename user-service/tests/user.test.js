const request = require('supertest');
const app = require('../src/app'); // Make sure to export your app in app.js

describe('User API', () => {
    it('should register a new user', async () => {
        const response = await request(app)
            .post('/api/users/register')
            .send({
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            });
        expect(response.statusCode).toBe(201);
        expect(response.body.message).toBe('User created successfully');
    });

    it('should login an existing user', async () => {
        const response = await request(app)
            .post('/api/users/login')
            .send({
                email: 'test@example.com',
                password: 'password123'
            });
        expect(response.statusCode).toBe(200);
        expect(response.body.token).toBeDefined();
    });
});
