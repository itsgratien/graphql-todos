# GraphQLTodos
todo list API using GraphQL, Express and MongoDB

## Pre-requisites

### clone repo
```
clone this repo
```

### Install
```
yarn install 
```
#### or
```
npm install
```

### Start server 
server will run on PORT 3000
```
npm start or yarn start
```
### Play with GraphQL by adding todos and get all todos like this
```
query{
  Todos{
    id
    name
    description
  }
}
mutation {
  createTodos(name: "GraphQL", description:"GraphQl"){
    name
    description
  }
}
```

## Author 
[gratien](https://github.com/itsgracian) :robot: