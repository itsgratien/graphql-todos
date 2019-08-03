
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { secretOrKey } = process.env;

exports.verifyToken = async (context) => {
   try {
       const token = await context.request.get('Authorization');
       const user = await jwt.verify(token, secretOrKey);
       if(!user){
           throw new Error(JSON.stringify('sorry, you must be authenticated to perform this action'));
       } 
       return user;
   } catch (error) {
       throw new Error(JSON.stringify({ authError: 'Invalid token'}));
   }
}