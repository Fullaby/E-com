const bcrypt= require('bcryptjs');

let hashPass = (payload)=> bcrypt.hashSync(payload,10)
let comparePass= (pass,passInDb) => bcrypt.compareSync(pass,passInDb)

module.exports= {
    hashPass,comparePass
}