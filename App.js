const {GraphQLServer} = require('graphql-yoga');
const bodyParser = require('body-parser');
const morgan = require('morgan');
//require database connection 
require('./src/connection/database');
const PORT = process.env.PORT || 3000;
//Schema
const Schema = require('./src/graphQL/schema');
//Resolvers
const resolvers = require('./src/graphQL/resolvers'); 
//middleware
const {combineMiddleware} = require('./src/graphQL/middlewares');
//context
const { verifyToken } = require('./src/graphQL/utils');
const typeDefs = Schema;

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    middlewares: combineMiddleware,
    context: verifyToken
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
