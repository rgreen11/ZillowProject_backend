const request = require('supertest')
const {app} = require('../app')
jest.mock('../services/tablecommand')
jest.mock('../services/Sellers')
// const pg_promise = require("pg-promise")
const {Sellers} = require('../services/Sellers')
const {buyer} =require('../services/buyer')

test('calling read returning 200',done=>{
    Sellers.read.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
    .get('/seller/search')
    .then(response=>{
        expect(response.status).toBe(200)
        done()
    })
})



test('calling POST returns 200', done => {
    Sellers.create.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
      .post('/seller/create')
      .then(response => {
            expect(response.status).toBe(200)
            done()
      })
})

test('calling PUT returns 200', done => {
    Sellers.update.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
      .put('/seller/update')
      .then(response => {
            expect(response.status).toBe(200)
            done()
      })
})



test('calling DELETE returns 200', done => {
    Sellers.delete.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
      .delete('/seller/delete')
      .then(response => {
            expect(response.status).toBe(200)
            done()
      })
})
