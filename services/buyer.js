const {db} = require('./tablecommand')
const buyer = {}


buyer.create = (fullName, email, buyer_id) => {
    const sql  = `
    INSERT INTO
    buyer (fullName, email, buyer_id)
    VALUES ($[fullName], $[email], $[buyer_id])`
    return db.none(sql, {fullName, email, buyer_id})
}

buyer.read = () => {
    const sql = `SELECT listings.* FROM sellers`;
    return db.any(sql)
    
}

buyer.update = (id, fullName, email, buyer_id) => {
    const sql = `
    UPDATE buyer SET
    fullName=$[fullName],
    email=$[email],
    buyer_id=$[buyer_id],
    WHERE 
    id=$[id]`;

    return db.none(sql,{id, fullName, email, buyer_id})
    // this functions needs a place holder for each param
    // figure out a way to only update one value without having to insert other values
    // *** what you can do is ask the user if the remaining data is the same with YES / NO. If so call this api and fill in the remaining data. :)
}

buyer.delete = (id) =>{
    
    const sql = `DELETE FROM buyer WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {buyer}