// DELETETests.js
'use strict'

console.log('>>>> [DELETETests]')

let chai = require('chai')
let should = chai.should()

describe('Ensure that the DELETE products API', () => {

  it('should be able to delete a record that exists', () => {
    let response = browser.delete('/product/1')
    response.should.have.status('200')
  })

  it('should not be able to delete a record that does not exists', () => {
    let response = browser.delete('/product/12')
    response.should.have.status('404')
  })

})