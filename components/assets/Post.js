import React, { useState, useEffect } from "react";
import { Card, Badge } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import { postsRef } from '../database';
import {
    FacebookShareButton,
    TwitterShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    WhatsappIcon
} from "react-share";

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.likeRef = React.createRef();
    }
    state = { likeState: 0, disableLike: false, postTags: [] }
    componentDidMount() {
        let array = [];
        var tags = this.props.post.tags.split(" ");
        tags.map((item) => {
            array.push(item);
        })
        postsRef.orderByChild("slug").equalTo(this.props.post.slug).on("child_added", snapshot => {
            this.setState({ likeState: snapshot.val().like, postTags: array })
        })
    }
    clickLike = async () => {
        await postsRef.orderByChild("slug").equalTo(this.props.post.slug).on("child_added", snapshot => {
            snapshot.ref.update({
                like: this.state.likeState + 1
            })
        })
        await postsRef.orderByChild("slug").equalTo(this.props.post.slug).on("child_added", snapshot => {
            this.setState({ likeState: snapshot.val().like, disableLike: true })
        })
        this.likeRef.current.style.color = "#a30000";
        this.likeRef.current.style.cursor = "default";
    }
    renderTags = () => {
        return this.state.postTags.map(tag => {
            return (
                <Badge style={{ padding: "5px", marginRight:"5px" }} variant="secondary">
                    {tag}
                </Badge>
            )
        })
    }
    render() {
        return (
            <Card className="custom-post-card">
                <Card.Img src={this.props.post.image} rounded />
                <Card.Body className="custom-post-card-body">
                    <Card.Title className="custom-card-title">{this.props.post.title}</Card.Title>
                    <p className="custom-card-props">
                        <span>{this.renderTags()}</span>
                        <span>{this.props.post.date}</span>
                    </p>
                    <Card.Text className="custom-card-text"><ReactMarkdown source={this.props.post.details} /></Card.Text>
                    <div className="custom-card-footer">
                        <button style={{backgroundColor:"transparent", border:"none"}} disabled={this.state.disableLike} ref={this.likeRef} onClick={this.clickLike} class="custom-card-like fa fa-lg fa-heart"> {this.state.likeState} Like</button>
                        <span>
                            <FacebookShareButton style={{ margin: "0px 2px" }} url={`${process.env.url}${this.props.post.slug}`}>
                                <FacebookIcon size={32} round={true} />
                            </FacebookShareButton>
                            <TwitterShareButton style={{ margin: "0px 2px" }} url={`${process.env.url}${this.props.post.slug}`}>
                                <TwitterIcon size={32} round={true} />
                            </TwitterShareButton>
                            <LinkedinShareButton style={{ margin: "0px 2px" }} url={`${process.env.url}${this.props.post.slug}`}>
                                <LinkedinIcon size={32} round={true} />
                            </LinkedinShareButton>
                            <WhatsappShareButton style={{ margin: "0px 2px" }} url={`${process.env.url}${this.props.post.slug}`}>
                                <WhatsappIcon size={32} round={true} />
                            </WhatsappShareButton>
                        </span>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

export default Post;
