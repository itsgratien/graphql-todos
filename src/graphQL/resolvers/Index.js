const {mergeResolvers} = require('merge-graphql-schemas');
const User = require('./User');
const Todo = require('./Todo');

const combineResolvers = [User, Todo];

module.exports = mergeResolvers(combineResolvers);