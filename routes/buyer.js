const {buyer} = require('../services/buyer')


const createBuyer = (req, res)=>{
    const {fullName, email, buyer_id} = req.body

    console.log(req)

    buyer.create(fullName, email, buyer_id)
    .then(() =>{
        res.json('user created') 
    })
    .catch(err=>{
        res.json({error:err})
    })
    
}

const readBuyer = (req, res) => {
  buyer.read()
        .then((data)=>{
        res.json(data)
      })
      .catch((error)=>{
        return error
      })
}

const updateBuyer = (req, res) =>{
  const {id, fullName, email, buyer_id} = req.body
  buyer.update(id, fullName, email, buyer_id)
  .then(_=>{
    return  res.json({'buyer': 'was removed'})
  })
  .catch((error)=>{
return res.json({err:error})
  })
}

const removeBuyer = (req, res) =>{
    const {id} = req.body;
    buyer.delete(id)
    .then(_=>{
    return  res.json({'listing': 'was removed'})
      })
      .catch((error)=>{
    return res.json({err:error})
      })
}


module.exports = { createBuyer, readBuyer, updateBuyer, removeBuyer}