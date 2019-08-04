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
type Message{
  message: String!
}
type Mutation{
    createTodos(name: String!, description: String!): Todo!
    updateTodos(id:ID!, name:String!, description: String!): Message!
    deleteTodos(id:ID!): Message!
}
`;

module.exports = TodoSchema;
