const TodoSchema = `
 type Query{
     info: String!
     Todos: [Todo!]
 }
 type Todo{
   id: ID
   name: String!
   description: String!
}
type Mutation{
    createTodos(name: String!, description: String!): Todo!
}

 
`;

module.exports = TodoSchema;
