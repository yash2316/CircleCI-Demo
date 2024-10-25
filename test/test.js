// test/testEmailValidation.js
const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const baseUrl = 'http://localhost:3000';

describe('POST /validate-email', () => {
    it('should return valid for a correct email', (done) => {
        request(baseUrl)
            .post('/validate-email')
            .send({ email: 'test@example.com' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body.valid).to.be.true;
                done();
            });
    });

    it('should return invalid for an incorrect email', (done) => {
        request(baseUrl)
            .post('/validate-email')
            .send({ email: 'invalid-email' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body.valid).to.be.false;
                done();
            });
    });

    it('should return invalid for an email with spaces', (done) => {
        request(baseUrl)
            .post('/validate-email')
            .send({ email: ' test@example.com' })
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body.valid).to.be.false;
                done();
            });
    });
});
