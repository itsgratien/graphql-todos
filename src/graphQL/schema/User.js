exports.UserSchema = `
type Query{
    currentUser: User!
}
type Mutation{
    Signup(username: String!, email: String!, password: String!): User!
    Signin(email: String!,password: String!): User! 
}
type User{
    id: ID
    username: String!
    email: String!
    password: String!
    token: String
    message: String
}
`