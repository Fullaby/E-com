const jwt= require('jsonwebtoken');
const secret= 'ayam'

let verifyToken= (token)=> jwt.verify(token,secret)
let createToken= (payload)=> jwt.sign(payload,secret)

module.exports= {
    verifyToken,createToken
}