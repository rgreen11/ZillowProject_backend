const {listings} = require('../services/listings')


const createListing = (req, res)=>{
    const {cost, address, yearbuilt, heating, cooling, parking, numday, type, listing_id} = req.body

    console.log(req)

    listings.create(cost, address, yearbuilt, heating, cooling, parking, numday, type, listing_id)
    .then(() =>{
        res.json('user created') 
    })
    .catch(err=>{
        res.json({error:err})
    })
    
}

const readListing = (req, res) => {
    listings.read()
        .then((data)=>{
        res.json(data)
      })
      .catch((error)=>{
        return error
      })
}

const updateListing = (req, res) =>{
  const {id, cost, address, yearbuilt, heating, cooling, parking, numday, type, listing_id} = req.body
  listings.update(id, cost, address, yearbuilt, heating, cooling, parking, numday, type, listing_id)
  .then(_=>{
    return  res.json({'listing': 'was updated'})
  })
  .catch((error)=>{
return res.json({err:error})
  })
}

const removeListing = (req, res) =>{
    const {id} = req.body;
    console.log(id)
    listings.delete(id)
    .then(_=>{
    return  res.json({'listing': 'was removed'})
      })
      .catch((error)=>{
    return res.json({err:error})
      })

}


module.exports = { createListing, readListing, updateListing, removeListing}