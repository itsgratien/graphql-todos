const TodoSchema = `
 type Query{
     info: String!
     Todos: [getAllTodo!]
     GetSingleTodo(id: ID!): getAllTodo!
 }
 type User{
     id: ID
     username: String!
     email: String!
 }
 type getAllTodo{
   id: ID
   name: String!
   description: String!
   postedBy: User!
 }
 type Todo{
   id: ID
   name: String!
   description: String!
   postedBy: ID!

}
type Mutation{
    createTodos(name: String!, description: String!): Todo!
}
`;

module.exports = TodoSchema;
