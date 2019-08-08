import React, { Component, Fragment } from 'react'
import {Modal, InputGroup, FormControl, 
ButtonToolbar, Button} from 'react-bootstrap';
import gql from 'graphql-tag';
import {Mutation} from 'react-apollo';


const POST_MUTATION = gql`
    mutation createTodos($name:String!, $description: String!){
        createTodos(name: $name, description: $description){
            name
            description
        }
}`;
class Create extends Component {
    state = {
        name: null,
        description: null
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const {name, description} = this.state;
        const {show} = this.props;
        return (
            <Fragment>
                <Modal show={show}>
                    <Modal.Dialog className="changeModalDialog">
                        <Modal.Header>
                          <Modal.Title>
                              Create Your Todos
                          </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <InputGroup className="mb-3">
                        <FormControl type="text" name="name" value={name} placeholder="name"
                        onChange={this.onChange}/>
                        </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl type="text" name="description" 
                                value={description} placeholder="small description text" 
                                onChange={this.onChange}/>
                            </InputGroup>
                            <Mutation mutation={POST_MUTATION} variables={{name, description}} onError={()=>{}}>
                                {(createBtn, result)=>{
                                    const { data, loading, error, called } = result;
                                    const btn = <ButtonToolbar>
                                    <Button variant="outline-secondary" onClick={createBtn}> Submit </Button>
                                    </ButtonToolbar>;
                                    if(loading){
                                        return (
                                            <Fragment>
                                                {btn}
                                                <div>loading ..wait...</div>
                                            </Fragment>
                                        )
                                    }
                                    if(!name || !description){
                                        return (
                                        <Fragment>
                                        {btn}
                                        <div className="alert alert-danger size mt-2">please all field are required.</div>
                                        </Fragment>
                                        );
                                    }
                                    if(error){
                                        console.log(JSON.stringify(error));
                                        return (
                                            <Fragment>
                                                {btn}
                                                <div>error</div>
                                            </Fragment>
                                        )
                                    }
                                    if(data){
                                        return window.location.reload(true);
                                    }
                                    if (!called) {
                                        return (
                                            <Fragment>
                                                {btn}
                                            </Fragment>
                                        )
                                    }
                                }}
       
                            </Mutation>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal>

            </Fragment>
        )
    }
}

export default Create;
