// POSTTests.js
'use strict'

console.log('>>>> [POSTTests]')

let chai = require('chai')
let should = chai.should()

describe('Ensure that the POST products API', () => {

  it('should be able to create a new record', () => {
    let response = browser.post('/product',{"name": "Fluffy Bear", "price": 85.60})
    response.should.have.status('200')
  })

})