const {Sellers} = require('../services/Sellers')


const create = (req, res)=>{
    const {first_name, last_name, phone_number, email, company, token} = req.body
    Sellers.create(first_name, last_name, phone_number, email, company, token)
    .then(() =>{
        res.json('user created') 
    })
    .catch(err=>{
        res.json({error:err})
    })
    
}

const read = (req, res) => {
    Sellers.read()
        .then((data)=>{
        res.status(200)
        res.json(data)
      })
      .catch((error)=>{
        return error
      })
}

const update = (req, res) =>{
    Sellers.update()
    .then(_=>{
    res.status(200)
    res.json('seller updated')
  })
  .catch((error)=>{
    return error
  })
}

const remove = (req, res) =>{
    const {id} = req.body
    Sellers.delete(id)
    .then(_=>{
    res.status(200)
    res.json('seller removed')
  })
  .catch((error)=>{
    return error
  })
}


module.exports = { create, read, update, remove}