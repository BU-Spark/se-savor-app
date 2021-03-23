const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const app = require('../index');

// Add plugins here
chai.use(chaiHttp);

describe('Testing index.js', function() {

    it('return a 404 - Not Found when path does not exists', (done) => {
        chai.request(app)
            .get('/asdfsdf')
            .end((err, res) => {
                assert.equal(res.status, 404);
                done();
             });
    });
});
