// GETTests.js
'use strict'

console.log('>>>> [GETTests]')

let chai = require('chai')
chai.use(require('chai-json'))
let should = chai.should()

describe('Ensure that the GET products API', () => {

  it('should be able to retreive all records', () => {
    let response = browser.get('/products')
    response.should.have.status('200')
  })

  it('should be able to retreive a single record', () => {
    let response = browser.get('/product/3')
    response.should.have.status('200')
  })

  it('should be able to retreive a single products information in JSON format', () => {
    let response = browser.get('/product/3')
    response.body.should.be.a.jsonFile().and.contain.jsonWithProps({ name: 'Kids T-shirt', price: "19.95" });
  })

  it('should give 404 response when retreiving a product that does not exist', () => {
    let response = browser.get('/product/12')
    response.should.have.status('404')
  })

})
