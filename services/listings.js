const {db} = require('./tablecommand')
const listings = {}


listings.create = (sellers_id, cost, address, yearbuilt, heating, cooling, parking, numDay, type, url) => {
    const sql  = `
    INSERT INTO
    listings (sellers_id, cost, address, yearbuilt, heating, cooling, parking, numDay, type, url)
    VALUES ($[sellers_id], $[cost], $[address], $[yearbuilt], $[heating], $[cooling], $[parking], $[numDay], $[type], $[url])`
    return db.none(sql, {sellers_id, cost, address, yearbuilt, heating, cooling, parking, numDay, type, url})
}

listings.read = () => {
    const sql = `SELECT listings.* FROM sellers`;
    return db.any(sql)
    
}

listings.update = (id, cost, address, yearbuilt, heating, cooling, parking, numday, type, listing_id) => {
    const sql = `
    UPDATE listings SET
    cost=$[cost],
    address=$[address],
    yearbuilt=$[yearbuilt],
    heating=$[heating],
    cooling=$[cooling],
    parking=$[parking],
    numday=$[numday],
    type=$[type],
    listing_id=$[listing_id]
    WHERE 
    id=$[id]`;

    return db.none(sql,{id, cost, address, yearbuilt, heating, cooling, parking, numday, type, listing_id})
    // this functions needs a place holder for each param
    // figure out a way to only update one value without having to insert other values
    // *** what you can do is ask the user if the remaining data is the same with YES / NO. If so call this api and fill in the remaining data. :)
}

listings.delete = (id) =>{
    const sql = `DELETE FROM listings WHERE id=$[id]`;
    return db.none(sql,{id})
}

module.exports = {listings}