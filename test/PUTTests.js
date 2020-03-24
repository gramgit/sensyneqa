// PUTTests.js
'use strict'

console.log('>>>> [PUTTests]')

let chai = require('chai')
let should = chai.should()

describe('Ensure that the PUT product API', () => {

  it('should be able to update a record', () => {
    let response = browser.put('/product/1',{"name": "Purple Rain", "price": 12.34})
    response.should.have.status('200')
  })

  it('should be able to update just the name', () => {
    let response = browser.put('/product/1',{"name": "Red Heart"})
    response.should.have.status('200')
  })
  
  it('should be able to update just the price', () => {
    let response = browser.put('/product/1',{"price": 18.30})
    response.should.have.status('200')
  })

  it('should not be able to update the product id', () => {
    let response = browser.put('/product/1',{"id": 7})
    response.should.have.status('404')
  })

})