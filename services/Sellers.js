const {db} = require('./tablecommand')
const sellers = {}


sellers.create = (first_name, last_name, phone_number, email, company, token, uid) => {
    const sql  = `
    INSERT INTO
    sellers (first_name, last_name, phone_number, email, company, token, uid)
    VALUES ($[first_name], $[last_name], $[phone_number], $[email], $[company], $[token], $[uid])`
    return db.none(sql, {first_name, last_name, phone_number, email, company, token, uid})
}

sellers.read = () => {
    const sql = `SELECT sellers.* FROM sellers`;
    return db.any(sql)
    
}

sellers.update = (id, first_name, last_name, phone_number, email, company) => {
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

sellers.delete = (id) =>{
    
    const sql = `DELETE FROM sellers WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {sellers}