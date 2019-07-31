const expect = require('chai').expect
const request = require('supertest')
const app = require('../index.js')

describe('get playstore', () => {
    it('returns array of apps', () => {
        return request(app)
            .get('/playstore')
            .expect(200)
            .expect('Content-Type', /json/)
            .then( res => {
                expect(res.body)
                .to.be.an('array') 
            })
    })
})