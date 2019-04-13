const express = require('express');
const bodyParser = require('body-parser');
const {create,read,update, remove} = require('./routes/sellers');
const {createListing, readListing, updateListing, removeListing} =require('./routes/listings')
const {createBuyer, readBuyer, updateBuyer, removeBuyer} = require('./routes/buyer')
const app = express();
const firebase = require('./firebase');

// middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
// firebase
const checkFireBaseToken = (req, res, next) => {
    const {token} = req.body;
    console.log('token:', token)
    firebase.auth().verifyIdToken(token)
        .then(function(decodedToken) {
        var uid = decodedToken.uid;
            next();
        }).catch(function(error) {
            res.json('ERROR!!!!')
        });
}

// const validUser = (req, res, next) => { 
//     // GET THE USERS UID
//     const uidInPostgres = '';
    
//     const uidInDecodedToken = req.decodedToken.uid;
    
//     if (uidInPostgres === uidInDecodedToken) {
//     next();
//     } else {
//     res.json({ error: "You're not the valid user" });
//         }
//     }

// routes

// sellers
app.post('/seller/create', create);
app.get('/seller/search', read);
app.put('/seller/update', checkFireBaseToken, update);
app.delete('/seller/delete', checkFireBaseToken, remove);
// listings
app.post('/listings/create',createListing); //checkFireBaseToken
app.get('/listings/search', readListing);
app.put('/listings/update', checkFireBaseToken, updateListing);
app.delete('/listings/delete',checkFireBaseToken ,removeListing);
//buyer
app.post('/buyer/create', createBuyer);
app.get('/buyer/search', checkFireBaseToken, readBuyer);
app.put('/buyer/update', checkFireBaseToken, updateBuyer);
app.delete('/buyer/delete', checkFireBaseToken, removeBuyer);


module.exports = { app, }