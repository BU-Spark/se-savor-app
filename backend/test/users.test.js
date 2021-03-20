const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const app = require('../index');

// Add plugins here
chai.use(chaiHttp);

describe('GET /users', function() {

    // Testing the slash path
    it('return a 400 - Bad Request', (done) => {
        chai.request(app)
            .get('/users/')
            .end((err, res) => {
                assert.equal(res.status, 400);
                assert.equal(res.body.error, 'Need a user id');
                done();
             });
    });
});