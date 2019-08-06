import React, {Component} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import logo from  '../../image/rocket.svg'; 

const POST_QUERY = gql`{
    Todos{
        id
        name
        description
    }
}`;

class Home extends Component {
    render() {
        return (
            <div className="App">
              <div className="App-intro mb-5">
               <img src={logo} alt="logo" className="logo mt-5"/>
               <h5 className="text-center mt-2"> GraphQL Todos</h5>
              </div>
              <div className="container">
                  <div className="row">
                    <Query query={POST_QUERY}>
                     {({loading, data})=>{
                         if(loading){
                             return 'loading ...'
                         }
                        if(data){
                        const { Todos } = data;
                        return Todos.map((todo) => <div className="col-md-4" key={todo.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{todo.name}</h5>
                                    <p className="card-tex">
                                        {todo.description}
                                    </p>
                                </div>
                            </div>
                        </div>)
                        }
                     }}
                    </Query>
                  </div>
              </div>
            </div>
        )
    }
}

export default Home;
