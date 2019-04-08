const request = require('supertest')
const {app} = require('../app')
jest.mock('../services/tablecommand')
jest.mock('../services/buyer')
// const pg_promise = require("pg-promise")
const {buyer} = require('../services/buyer')



// ---------------- buyer


test('calling read returning 200',done=>{
    buyer.read.mockImplementation(()=>{
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
    buyer.create.mockImplementation(()=>{
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
    buyer.update.mockImplementation(()=>{
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
    buyer.delete.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
      .delete('/seller/delete')
      .then(response => {
            expect(response.status).toBe(200)
            done()
      })
})
