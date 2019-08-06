# GraphQLTodos
FullStack  Todo List APP  using GraphQL, Express, MongoDB and React Js (MERN Stack).

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

## Install Frontend App
```
- change directory to /client
- run npm install

```
## Frontend ScreenShoot


## Backend ScreenShoot
<img width="1440" alt="Screen Shot 2019-08-02 at 20 04 42" src="https://user-images.githubusercontent.com/27460888/62389719-d665e280-b560-11e9-91dc-c14e1186ea2f.png">

## Author 
[gratien](https://github.com/itsgracian) :robot:

## Licence
MIT
