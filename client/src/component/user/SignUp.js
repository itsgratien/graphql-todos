import React, { Component, Fragment } from 'react'
import { Mutation } from 'react-apollo';
import { Redirect} from 'react-router-dom';
import gql from 'graphql-tag';
import Input from '../common/Input';
import logo from '../../image/rocket.svg';

export const POST_MUTATION = gql`
  mutation Signup($email: String!, $password: String!, $username: String!){
    Signup(email: $email, password: $password, username: $username){
     email
    }
}`;
class SignUp extends Component {
    state = {
        email: '',
        password: '',
        username: ''
    }
    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const {email, password, username} = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="mt-5 mb-5">
                            <img src={logo} alt="logo" className="logo" />
                            <h5>SignUp</h5>
                        </div>
                        <form className="form form-horizontal">
                            <Input className="form-control" type="text"
                                value={username} placeholder="Your username"
                                onChange={this.onChange} name="username" />
                            <Input className="form-control" type="email"
                                value={email} placeholder="Your email"
                                onChange={this.onChange} name="email" />
                            <Input className="form-control" type="password" value={password}
                                placeholder="Your password" onChange={this.onChange}
                                name="password" />
                            <Mutation mutation={POST_MUTATION} variables={{ email, password, username }} onError={(error) => { }}>
                                {(register, result) => {
                                    const { data, loading, error, called } = result;
                                    const button = <button type="button" className="btn btn-dark" onClick={register}> Signup </button>;
                                    if (!called) {
                                        return button;
                                    }
                                    if (loading) {
                                        return (<Fragment>
                                            {button}
                                            loading ....</Fragment>);
                                    }
                                    if (error) {
                                       const { message } = error.graphQLErrors[0];
                                        console.log(JSON.stringify(error));
                                        return (
                                            <Fragment>
                                                {button}
                                                <div className="alert alert-danger size mt-2">{message ?  message : 'something wrong please try again later.'}</div>
                                            </Fragment>
                                        );
                                    }
                                    const { Signup } = data;
                                    if (Signup) {
                                        return <Redirect to="/login"/>;
                                    } else {
                                        return null;
                                    }
                                }}
                            </Mutation>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;