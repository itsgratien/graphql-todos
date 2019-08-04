const {verifyEmail, verifyAuthentication} = require('./User');

exports.combineMiddleware = {
    Query:{
      GetSingleTodo: verifyAuthentication
    },
    Mutation:{
        Signin: verifyEmail,
        createTodos: verifyAuthentication
    }
};
