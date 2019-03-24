const {db} = require('./tablecommand')
const Sellers = {}


Sellers.create = (first_name, last_name, phone_number, email, company, token) => {
    const sql  = `
    INSERT INTO
    sellers (first_name, last_name, phone_number, email, company, token)
    VALUES ($[first_name], $[last_name], $[phone_number], $[email], $[company], $[token])`
    return db.none(sql, {first_name, last_name, phone_number, email, company, token})
}

Sellers.read = () => {
    const sql = `SELECT sellers.* FROM sellers`;
    return db.any(sql)
    
}

Sellers.update = (id, first_name, last_name, phone_number, email, company) => {
    const sql = `
    UPDATE sellers SET
    first_name=$[first_name],
    last_name=$[last_name],
    phone_number=$[phone_number],
    email=$[email],
    company=$[company]
    WHERE 
    id=$[id]`;

    return db.none(sql,{id,first_name, last_name, phone_number, email, company})
    // this functions needs a place holder for each param
    // figure out a way to only update one value without having to insert other values
    // *** what you can do is ask the user if the remaining data is the same with YES / NO. If so call this api and fill in the remaining data. :)
}

Sellers.delete = (id) =>{
    
    const sql = `DELETE FROM sellers WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {Sellers}