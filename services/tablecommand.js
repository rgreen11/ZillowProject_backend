const pgp = require('pg-promise')({});
const db = pgp('postgres://localhost/zillow');

module.exports = {db}
