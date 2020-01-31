import React, { Component } from 'react';
import axios from 'axios';
import { postsRef } from '../database';
import { Row, Col, Button, Modal } from 'react-bootstrap';

class WritePost extends React.Component {
    monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    state = { post: [] }
    submitPost = async event => {
        var today = new Date();
        var todayDate = today.getDate() + ' ' + this.monthNames[today.getMonth()] + ' ' + today.getFullYear();
        axios.post(`${process.env.url}api/writepost`, {
            title: event.target.title.value,
            slug: event.target.slug.value,
            details: event.target.details.value,
            date: todayDate,
            image: event.target.image.value,
            tags: event.target.tags.value
        })
    }
    render() {
        return (
            <div>
                <Modal 
                    size="lg" 
                    aria-labelledby="contained-modal-title-vcenter"
                    show={this.props.showModal}
                    onHide={this.props.hideModalHandler}
                >
                    <form style={{ margin: "20px" }} onSubmit={this.submitPost}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add new post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                            <Row>
                                <Col className="col-1">
                                    <label><h5>Title</h5></label>
                                </Col>
                                <Col className="col-11">
                                    <input style={{ width: "100%", marginBottom: "10px" }} type="text" id="title" name="title"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-1">
                                    <label><h5>Details </h5></label>
                                </Col>
                                <Col className="col-11">
                                    <textarea style={{ whiteSpace: "pre-line", width: "100%", height: "400px", marginBottom: "10px" }} type="text" id="details" name="details"></textarea>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-1">
                                    <label><h5>Slug</h5></label>
                                </Col>
                                <Col className="col-11">
                                    <input style={{ width: "100%", marginBottom: "10px" }} type="text" name="slug"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-1">
                                    <label><h5>Image</h5></label>
                                </Col>
                                <Col className="col-11">
                                    <input style={{ width: "100%", marginBottom: "10px" }} type="text" name="image"></input>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="col-1">
                                    <label><h5>Tags</h5></label>
                                </Col>
                                <Col className="col-11">
                                    <input style={{ width: "100%", marginBottom: "10px" }} type="text" name="tags"></input>
                                </Col>
                            </Row>
                        
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.hideModalHandler}>
                            Close
                        </Button>
                        <button className="btn btn-info">Submit</button>
                    </Modal.Footer>
                    </form>
                </Modal>

            </div>
        )
    }
}

export default WritePost;