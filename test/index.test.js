const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

const server = require('../app');

chai.use(chaiHttp);

// testlerimizi ne testi oldugunu acikliyoruz.
describe('Node Server', () => {
    it('(GET /) anasayfayı dondurur', (done) => {
       chai.request(server)
           .get('/')
           .end((err, res) => {
               res.should.have.status(200);
               done();
           });
    });
});