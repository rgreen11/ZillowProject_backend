jest.mock('../firebase')
let admin = require('../firebase')

const checkFirebaseToken = require('../services/firebase_auth.js')


test('with valid id token, next is called', done => {

    admin.auth.mockImplementationOnce(() => {
        return {
            verifyIdToken: (...rest) => Promise.resolve({
                uid: 'test-uid'
            }),
        }
    })

    const mockReq = {
        body: {
            token: 'test-token'
        }
    }

    const mockNext = jest.fn();
    checkFirebaseToken(mockReq, {}, mockNext)
    setTimeout(() => {
        expect(mockNext.mock.calls.length).toBe(1)
        done()
    }, 0)
    
})

test('without valid id token, next is NOT called', done => {

    admin.auth.mockImplementationOnce(() => {
        return {
            verifyIdToken: (...rest) => Promise.reject(),
        }
    })

    const mockReq = {
        body: {
            token: 'test-token'
        }
    }

    const mockRes = {
        status: jest.fn(),
        json: jest.fn(),
    }

    const mockNext = jest.fn();
    checkFirebaseToken(mockReq, mockRes, mockNext)
    setTimeout(() => {
        expect(mockRes.status.mock.calls.length).toBe(1)
        expect(mockRes.status.mock.calls[0][0]).toBe(400)
        expect(mockRes.json.mock.calls.length).toBe(1)
        done()
    }, 0)
    
})
Collapse



