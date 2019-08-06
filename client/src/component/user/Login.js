import React, { Component } from 'react';
import Input from '../common/Input';
import logo from '../../image/rocket.svg';


class Login extends Component {
    state = {
        email: null,
        password: null
    }
    onChange = e =>{
        this.setState({[e.target.name]: e.target.value});
    }
    login = e => {
        e.preventDefault();
        alert('yes  man');
    }
    render() {
         const { email, password } = this.state;
        return (
            <div className="container">
              <div className="row">
                <div className="col-md-4 offset-md-4">
                    <div className="mt-5 mb-5">
                    <img src={logo} alt="logo" className="logo"/>
                     <h5>Login</h5>
                    </div>
                    <form className="form form-horizontal" onSubmit={this.login}>
                    <Input className="form-control" type="email" 
                    value={email} placeholder="Your email" 
                    onChange={this.onChange} name="email"/>
                    <Input className="form-control" type="password" value={password} 
                    placeholder="Your password" onChange={this.onChange}
                    name="password"/>
                    <button type="submit" className="btn btn-dark"> Signin </button>
                  </form>
                </div>
              </div>
            </div>
        )
    }
}

export default Login