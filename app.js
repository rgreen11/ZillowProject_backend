const express = require('express');
const bodyParser = require('body-parser');
const {create,read,update, remove} = require('./routes/sellers');
const {createListing, readListing, updateListing, removeListing} =require('./routes/listings')
const {createBuyer, readBuyer, updateBuyer, removeBuyer} = require('./routes/buyer')
const app = express();

// middleware
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
// routes

// sellers
app.post('/seller/create', create);
app.get('/seller/search', read);
app.put('/seller/update', update);
app.delete('/seller/delete', remove);
// listings
app.post('/listings/create', createListing);
app.get('/listings/search', readListing);
app.put('/listings/update', updateListing);
app.delete('/listings/delete', removeListing);
//buyer
app.post('/buyer/create', createBuyer);
app.get('/buyer/search', readBuyer);
app.put('/buyer/update', updateBuyer);
app.delete('/buyer/delete', removeBuyer);

module.exports = { app, }