const {verifyEmail, verifyAuthentication} = require('./User');
const {verifyTodos} = require('./Todo');

exports.combineMiddleware = {
    Query:{
      GetSingleTodo: verifyAuthentication
    },
    Mutation:{
        Signin: verifyEmail,
        createTodos: verifyAuthentication,
        updateTodos: verifyAuthentication,
        updateTodos: verifyTodos,
        deleteTodos: verifyAuthentication,
        deleteTodos: verifyTodos
    }
};
