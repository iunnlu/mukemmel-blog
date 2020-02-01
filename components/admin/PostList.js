import React, { useState } from 'react';
import { ListGroup, Button, Modal, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import router from 'next/router';

const PostList = ({ posts }) => {
    const [showDelete, setShowDelete] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [indexDelete, setIndexDelete] = useState(null);
    const [title, setTitle] = useState(null);
    const [details, setDetails] = useState(null);
    const [image, setImage] = useState(null);
    const [tags, setTags] = useState(null);
    const deletePostHandler = () => {
        const deleteSlug = posts[indexDelete].slug;
        axios.post(`${process.env.url}api/post/delete`, {
            slug: deleteSlug
        })
        setShowDelete(false)
        router.push("/admin/home")
    }
    const editPostHandler = () => {
        const editSlug = posts[indexDelete].slug;
        const editLike = posts[indexDelete].like;
        const editDate = posts[indexDelete].date;
        axios.post(`${process.env.url}api/post/edit`, {
            title: title,
            details: details,
            image: image,
            tags: tags,
            slug: editSlug,
            date: editDate,
            like: editLike
        })
        setShowEdit(false)
        router.push("/admin/home")
    }
    const handleClose = () => {
        setShowDelete(false);
    }
    const handleOpen = (index) => {
        setIndexDelete(index)
        setShowDelete(true);
    }
    const editHandleClose = () => {
        setShowEdit(false);
    }
    const editHandleOpen = (index) => {
        setTitle(posts[index].title);
        setDetails(posts[index].details);
        setImage(posts[index].image);
        setTags(posts[index].tags);
        setIndexDelete(index)
        setShowEdit(true);
    }
    const changeTitle = (event) => {
        setTitle(event.target.value)
    }
    const changeDetails = (event) => {
        setDetails(event.target.value)
    }
    const changeImage = (event) => {
        setImage(event.target.value)
    }
    const changeTags = (event) => {
        setTags(event.target.value)
    }
    const RenderPosts = () => {
        return posts.map((post, index) => {
            return (
                <React.Fragment>
                    <ListGroup.Item style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h6 style={{ color: "gray" }}>{post.title}</h6>
                        <span style={{ textAlign: "right" }}>
                            <Button style={{ marginRight: "10px" }} onClick={() => editHandleOpen(index)} variant="info">Edit</Button>
                            <Button onClick={() => handleOpen(index)} variant="danger">Delete</Button>
                        </span>
                    </ListGroup.Item>
                    <Modal aria-labelledby="contained-modal-title-vcenter" show={showDelete} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Delete Post</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Are you sure delete this post?</Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button value={index} variant="primary" onClick={() => deletePostHandler()}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </React.Fragment>
            )
        })
    }
    return (
        <ListGroup variant="flush">
            {RenderPosts()}
                <Modal size="lg" aria-labelledby="contained-modal-title-vcenter" show={showEdit} onHide={editHandleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete Post</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col className="col-1">
                                <label><h5>Title</h5></label>
                            </Col>
                            <Col className="col-11">
                                <input value={title} onChange={changeTitle} style={{ width: "100%", marginBottom: "10px" }} type="text" id="title" name="title"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-1">
                                <label><h5>Details </h5></label>
                            </Col>
                            <Col className="col-11">
                                <textarea value={details} onChange={changeDetails} style={{ whiteSpace: "pre-line", width: "100%", height: "400px", marginBottom: "10px" }} type="text" id="details" name="details"></textarea>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-1">
                                <label><h5>Image</h5></label>
                            </Col>
                            <Col className="col-11">
                                <input value={image} onChange={changeImage} style={{ width: "100%", marginBottom: "10px" }} type="text" name="image"></input>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="col-1">
                                <label><h5>Tags</h5></label>
                            </Col>
                            <Col className="col-11">
                                <input value={tags} onChange={changeTags} style={{ width: "100%", marginBottom: "10px" }} type="text" name="tags"></input>
                            </Col>
                        </Row>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={editHandleClose}>
                            Close
                        </Button>
                        <Button variant="info" onClick={editPostHandler}>
                            Edit
                        </Button>
                    </Modal.Footer>
                </Modal>
        </ListGroup>
    )
}

export default PostList;