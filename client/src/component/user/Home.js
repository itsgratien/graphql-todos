import React, {Component, Fragment} from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import logo from  '../../image/rocket.svg'; 
import Navbar from '../common/Navbar';
import CreateTodo from '../todo/Create';

const POST_QUERY = gql`{
    Todos{
        id
        name
        description
        postedBy{
            username
        }
    }
}`;

class Home extends Component {
    state = {
        show: false
    }

    open = () =>{
        //check if token is there
        if (!localStorage.getItem('graphQlToken')) window.location.replace('/login');
       this.setState({show: true});
    }
    render() {
        const {show} = this.state;
        return (
            <div className="App">
                <Navbar />
              <div className="App-intro mb-5">
               <img src={logo} alt="logo" className="logo mt-5"/>
                    <h5 className="text-center mt-3"> <b>GraphQL Todos</b> </h5>
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
                        return (<Fragment>
                            {Todos.map((todo) => <div className="col-md-4" key={todo.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{todo.name}</h5>
                                        <p className="card-tex">
                                            {todo.description}
                                        </p>
                                        <b>
                                            <small>Created By {todo.postedBy.username}</small>
                                        </b>
                                    </div>
                                </div>
                            </div>)}
                        </Fragment>)
                        }
                     }}
                    </Query>
                    <div className="addTodos" role="button" onClick={this.open}>+</div>
                    <CreateTodo show={show} />
                  </div>
              </div>
              <div className="footer">
                    Created By <b>gratien</b>
              </div>
            </div>
        )
    }
}

export default Home;
