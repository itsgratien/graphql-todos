const jwt = require('jsonwebtoken');
require('dotenv').config();

const { secretOrKey } = process.env;
exports.generate = (payload) =>{
  const token = jwt.sign(payload,secretOrKey, {expiresIn: '2d'});
  return token;
}