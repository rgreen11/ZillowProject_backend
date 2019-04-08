const request = require('supertest')
const {app} = require('../app')
jest.mock('../services/tablecommand')
jest.mock('../services/sellers')
const {sellers} = require('../services/sellers')


test('calling read returning 200',done=>{
    sellers.read.mockImplementation(()=>{
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
    sellers.create.mockImplementation(()=>{
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
    sellers.update.mockImplementation(()=>{
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
    sellers.delete.mockImplementation(()=>{
        return Promise.resolve()
    })
    request(app)
      .delete('/seller/delete')
      .then(response => {
            expect(response.status).toBe(200)
            done()
      })
})