 const {Signup, Signin, currentUser} = require('../controllers/User');

 module.exports = {
     Query:{
         currentUser
     },
     Mutation:{
         Signup,
         Signin
     }
 }