import React from 'react';
import axios from 'axios';
import { Card, ListGroup, Col, Image, Row, Spinner } from 'react-bootstrap';
import '../../styles/commentsStyle.scss';

class Comments extends React.Component {
    calculateTime = (date) => {
        const date1 = new Date();
        const miliseconds = date1.getTime() - date;
        const minutes = Math.floor(miliseconds/60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);
        console.log("minute ", minutes, "hours ", hours, "days ", days)
        if(minutes < 60){
            return <p>{minutes} minute ago</p>
        }else if(hours < 24){
            return <p>{hours} hour ago</p>
        }else{
            return <p>{days} day ago</p>
        }
    }
    renderComments = () => {
        return this.props.comments.map((item, index) => {
            return (
                <ListGroup variant="flush" className="comments-list">
                    <ListGroup.Item className="comments-list-item" style={index === 0 ? { borderTop: "1px solid #bababa"} : {}}>
                        <Row className="comments-row">
                            <Col className="col-3 col-sm-2 col-md-3 col-lg-2 col-xl-2 comments-image-col">
                                <Image className="comments-image" src="https://d3buf9vqrgrft6.cloudfront.net/assets/default_user-e9127509183b26c6472a9ef6b49a5719.png" roundedCircle />
                            </Col>
                            <Col className="col-9 col-sm-10 col-md-9 col-lg-10 col-xl-10 comments-content-col">
                                <span className="comment-content-header">
                                    {item.name}&nbsp;{item.surname}
                                </span>
                                <br />
                                <p className="comment-content-text">
                                    {item.comment}
                                </p>
                                <p className="comment-time" style={{color:"gray", textAlign:"right", position:"relative", top:"-5px"}}><span>{this.calculateTime(item.date)}</span></p>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
            )
        })
    }
    render() {
        return (
            <React.Fragment>
                <h2 style={{ margin: "20px 0px 20px 28px" }}>Comments</h2>
                {
                    this.props.comments.length === 0
                    ? <div style={{textAlign:"center", marginBottom:"10px", marginTop:"10px"}}><h5>No comments yet.</h5></div>
                    : this.renderComments()
                }
            </React.Fragment>
        )
    }
}

export default Comments;