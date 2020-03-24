// wdio.commands.js
'use strict'

let config = require('../wdio.conf').config
let chai = require('chai')
let chaiHttp = require('chai-http')

chai.use(chaiHttp)

browser.addCommand('get', async(app, jsonData={}) => {
  return chai.request('http://localhost:5000/v1/')
    .get(app)
    .set('content-type', 'application/json')
    .send(jsonData)
})

browser.addCommand('put', async(app, jsonData={}) => {
  return chai.request('http://localhost:5000/v1/')
    .put(app)
    .set('content-type', 'application/json')
    .send(jsonData)
})

browser.addCommand('post', async(app, jsonData={}) => {
  return chai.request('http://localhost:5000/v1/')
    .post(app)
    .set('content-type', 'application/json')
    .send(jsonData)
})

browser.addCommand('delete', async(app, jsonData={}) => {
  return chai.request('http://localhost:5000/v1/')
    .delete(app)
})