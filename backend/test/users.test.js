const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const app = require('../index');

// Add plugins here
chai.use(chaiHttp);

describe('GET /users', function() {

    it('return a 404 - Not Found when no id is provided', (done) => {
        chai.request(app)
            .get('/users/')
            .end((err, res) => {
                assert.equal(res.status, 404);
                done();
             });
    });

    it('return a user\'s dashboard data', (done) => {
        const id = 1;

        chai.request(app)
            .get(`/users/${id}`)
            .end((err, res) => {
                let data = res.body.data;

                assert.equal(res.status, 200);
                assert.typeOf(data, 'object');
                assert.equal(data.id, id);
                done();
             });
    });

    it('return an error for nonexistent user', (done) => {
        const id = 1000;

        chai.request(app)
            .get(`/users/${id}`)
            .end((err, res) => {
                assert.equal(res.status, 400);
                assert.equal(res.body.error, 'User does not exist');
                done();
             });
    });
});

describe('PUT /users', function() {

    it('return a 404 - Not Found when no id is provided', (done) => {
        chai.request(app)
            .put('/users/')
            .end((err, res) => {
                assert.equal(res.status, 404);
                done();
             });
    });

    it('update a user\'s dashboard data', (done) => {
        const id = 1;

        chai.request(app)
            .put(`/users/${id}`)
            .end((err, res) => {
                assert.equal(res.status, 200);
                assert.equal(res.body.message, 'Updated user data');
                done();
             });
    });

    it('return an error for nonexistent user', (done) => {
        const id = 1000;

        chai.request(app)
            .put(`/users/${id}`)
            .end((err, res) => {
                assert.equal(res.status, 400);
                assert.equal(res.body.error, 'User does not exist');
                done();
             });
    });
});
