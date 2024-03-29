import React, {Component} from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './component/user/Login';
import Home from './component/user/Home';
import Signup from './component/user/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


//connect our backend
const token = localStorage.getItem('graphQlToken');
const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  headers:{
    "Authorization": token
  }
});

class App extends Component{
  render(){
  return (
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component = {Home} />
        <Route path ="/login" component = {Login} />
        <Route path="/signup" component = {Signup} />
      </Router>
    </ApolloProvider>
  );
}
}

export default App;
