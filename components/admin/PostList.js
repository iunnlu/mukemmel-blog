import React, { useState } from 'react';
import { ListGroup, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import router from 'next/router'

const PostList = ({ posts }) => {
    const [show, setShow] = useState(false);
    const [indexDelete, setIndexDelete] = useState(null);
    const deletePostHandler = () => {
        const deleteSlug = posts[indexDelete].slug;
        axios.post(`${process.env.url}api/post/delete`, {
            slug: deleteSlug
        })
        setShow(false)
        router.push("/admin/home")
    }
    const handleClose = () => {
        setShow(false);
    }
    const handleOpen = (index) => {
        setIndexDelete(index)
        setShow(true);
    }
    const RenderPosts = () => {
        return posts.map((post, index) => {
            return (
                <React.Fragment>
                    <ListGroup.Item style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <h6 style={{ color: "gray" }}>{post.title}</h6>
                        <span style={{ textAlign: "right" }}><Button onClick={() => handleOpen(index)} variant="danger">Delete</Button></span>
                    </ListGroup.Item>
                    <Modal aria-labelledby="contained-modal-title-vcenter" show={show} onHide={handleClose}>
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
        </ListGroup>
    )
}

export default PostList;