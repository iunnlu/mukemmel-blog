import React from 'react';
import Link from 'next/link';
import { auth, firebase } from '../../components/database';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import router from 'next/router';

class CreateUser extends React.Component {
    state = { email: "", password: null, show: false, error: null }
    changeName = (event) => {
        this.setState({ email: event.target.value })
    }
    changePassword = (event) => {
        this.setState({ password: event.target.value })
    }
    submitForm = (event) => {
        const { email, password } = this.state;
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((user) => {       
            })
            .catch((error) => {
                this.setState({error: error.message})
            });
            router.push('/admin/home');
            this.setState({show: false})
    }
    showHandler = () => {
        this.setState({ show: true })
    }
    closeHandler = () => {
        this.setState({ show: false })
    }
    render() {
        return (
            <React.Fragment>
                <Button variant="info" onClick={this.showHandler}>Create User</Button>
                <Modal 
                    show={this.state.show} 
                    onHide={this.closeHandler}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row style={{marginBottom:"10px"}}>
                            <Col className="col-3">
                                <h6>Enter your name</h6>
                            </Col>
                            <Col className="col-9">
                                <input style={{width:"100%"}} name="email" type="text" placeholder="Enter a email" onChange={this.changeName}></input>
                            </Col>
                        </Row>
                        <Row style={{marginBottom:"10px"}}>
                            <Col className="col-3">
                                <h6>Enter your password</h6>
                            </Col>
                            <Col className="col-9">
                                <input style={{width:"100%"}} name="password" type="password" placeholder="Enter a password" onChange={this.changePassword}></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h5 style={{color:"red"}}>{this.state.error}</h5>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeHandler}>
                            Close
                    </Button>
                        <button className="btn btn-info" onClick={this.submitForm}>Submit</button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default CreateUser;