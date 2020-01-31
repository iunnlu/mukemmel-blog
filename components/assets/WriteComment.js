import React, { useState } from 'react';
import '../../styles/writeComment.css';
import axios from 'axios';
import Comments from './Comments';
import { commentsRef } from '../../components/database';

class WriteComment extends React.Component {
    state = { comments: [], name: "", surname: "", comment: "", danger: "" }
    writeSubmit = async (event) => {
        const currentDate = new Date();
        if (this.state.name != "" && this.state.surname != "" && this.state.comment != "") {
            axios.post(`${process.env.url}api/writecomment`, {
                postSlug: this.props.post.slug,
                name: this.state.name,
                surname: this.state.surname,
                comment: this.state.comment,
                date: currentDate.getTime()
            })    
        } else {
            event.preventDefault();
            this.setState({ danger: "Please write a comment!" });
        }
    }
    changeNameHandler = (event) => {
        this.setState({ name: event.target.value })
    }
    changeSurnameHandler = (event) => {
        this.setState({ surname: event.target.value })
    }
    changeCommentHandler = (event) => {
        this.setState({ comment: event.target.value })
    }
    commentWriteRender = () => {
        if (this.state.name != "" && this.state.surname)
            return (
                <div className="col" style={{ textAlign: "center" }}>
                    <p style={{ fontSize: "20px", margin: "0px", marginBottom: "5px", textAlign: "left" }}>Your Comment</p>
                    <p className="custom-danger-text">{this.state.danger}</p>
                    <textarea onChange={this.changeCommentHandler} className="custom-textarea" placeholder="Write your comment..." />
                    <div style={{ textAlign: "right", marginTop: "5px", marginBottom: "5px" }}>
                        <button className="btn btn-dark" >Submit</button>
                    </div>
                </div>
            )
    }
    render() {
        return (
            <form method="POST" onSubmit={this.writeSubmit} style={{marginBottom:"20px", marginTop:"20px"}}>
                <div className="custom-comment-card card">
                    <div class="card-body">
                        <h2 class="card-title" style={{ marginTop: "10px", marginLeft: "10px" }}>Write a comment!</h2>
                        <div className="container" style={{ width: "95%" }}>
                            <div className="row" style={{ marginBottom: "20px" }}>
                                <div className="col" style={{ marginTop: "10px" }}>
                                    <p style={{ fontSize: "20px", margin: "0px", marginBottom: "5px" }}>Name</p>
                                    <input className="custom-input" onChange={this.changeNameHandler} placeholder="Write your name..." />
                                </div>
                                <div className="col" style={{ marginTop: "10px" }}>
                                    <p style={{ fontSize: "20px", margin: "0px", marginBottom: "5px" }}>Surname</p>
                                    <input className="custom-input" onChange={this.changeSurnameHandler} placeholder="Write your name..." />
                                </div>
                            </div>
                            <div className="row">
                                {this.commentWriteRender()}
                            </div>
                        </div>
                    </div>
                    <Comments comments={this.props.comments} />
                </div>
            </form>
        )
    }
}

export default WriteComment;