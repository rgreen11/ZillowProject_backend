const {Sellers} = require('../services/Sellers')


const create = (req, res)=>{
    const {first_name, last_name, phone_number, email, company, token} = req.body

    console.log(req)

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
        res.json(data)
      })
      .catch((error)=>{
        return error
      })
}

const update = (req, res) =>{
    Sellers.update()
}

const remove = (req, res) =>{
    Sellers.delete()
}


module.exports = { create, read, update, remove}