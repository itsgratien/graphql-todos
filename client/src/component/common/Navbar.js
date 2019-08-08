import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';


const POST_QUERY = gql`{
    currentUser{
        username
        email
    }
}`;
class Navbar extends Component {

    logout = () => {
        localStorage.removeItem('graphQlToken');
        window.location.href = '/';
    }
    render() {
        return (
            <div className="App-header">
                <nav className="navbar">
                    <ul className="navbar-nav">
                       
                            <Query query={POST_QUERY}>
                                {({ loading, data, error }) => {
                                    if (loading) {
                                        return <div>Loading ...</div>
                                    }
                                    if (!data) {
                                        return (
                                            <Fragment>
                                                <li><Link to="/login">
                                                    <button type="button" className="btn btn-dark">Login</button>
                                                </Link> </li>
                                                <li className="logout"><Link to="/signup">
                                                    <button type="button" className="btn btn-danger">signup</button>
                                                </Link> </li>
                                            </Fragment>
                                        );
                                    }else{
                                        const {currentUser} = data;
                                        return (<Fragment>
                                            <li><Link to="/">
                                                <strong className="username">Hi {currentUser.username}</strong>
                                            </Link><br /><br /></li>
                                            <li className="logout">
                                                <button type="button" className="btn btn-dark" onClick={this.logout}>Logout</button>
                                            </li>
                                        </Fragment>
                                        )
                                    }

                                }}
                            </Query>
                    </ul>
                </nav>
            </div>
        )
    }
}
export default Navbar;