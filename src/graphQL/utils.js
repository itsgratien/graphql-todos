
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { secretOrKey } = process.env;

exports.verifyToken = (context) => {
    let user;
   try {
       const token = context.request.get('Authorization');
       user = jwt.verify(token, secretOrKey);
   } catch (error) {
       return null;
   }
   return user;
}