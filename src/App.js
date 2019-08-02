const {GraphQLServer} = require('graphql-yoga');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//require database connection 
require('./connection/database');
//Schema
const TodoSchema = require('./graphQL/schema/Todo');
//Resolvers
const TodoResolvers = require('./graphQL/resolvers/Todo'); 

const PORT = process.env.PORT || 3000;

const server = new GraphQLServer({
    typeDefs: TodoSchema,
    resolvers: TodoResolvers
});

const app = server.express;

//bodyParser
app.use(bodyParser.json());

//morgan
app.use(morgan('dev'));


server.start({
    port: PORT,
    endpoint: '/graphql'
},() => console.log(`Server started on PORT ${PORT}`))
