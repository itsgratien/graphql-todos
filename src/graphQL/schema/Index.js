const {mergeTypes} = require('merge-graphql-schemas');
const UserSchema = require('../schema/User');
const TodoSchema = require('../schema/Todo');

const merge = [TodoSchema, UserSchema.UserSchema];
const combineSchema = mergeTypes(merge);

module.exports = combineSchema;