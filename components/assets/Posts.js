import React, { useState } from 'react';
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import "../../styles/postsStyle.scss";

const Posts = ({ comments, posts }) => {
  const [maxLength, setMaxLength] = useState(5);
  const calculateCommentCount = (slug) => {
    let commentCount = 0;
    comments.map(item => {
      if (slug === item.postSlug) commentCount = commentCount + 1;
    })
    return commentCount;
  }
  const showHandler = () => {
    setMaxLength(maxLength*2);
  }
  const hideHandler = () => {
    setMaxLength(5);
  }
  const renderFooter = () => {
    if(posts.length > maxLength){
      return <div style={{textAlign:"center", marginTop:"20px"}}><span style={{fontWeight:"bold",fontSize:"20px", cursor:"pointer", color:"#137d9c"}} onClick={showHandler}>Show More&nbsp;&nbsp;<i class="fa fa-chevron-down"></i></span></div>
    }else if(5 >= posts.length){
      return <React.Fragment></React.Fragment>
    }else{
      return <div style={{textAlign:"center", marginTop:"20px"}}><span style={{fontWeight:"bold",fontSize:"20px", cursor:"pointer", color:"#137d9c"}} onClick={hideHandler}>Hide&nbsp;&nbsp;<i class="fa fa-chevron-up"></i></span></div>
    }
  }
  const renderPosts = () => {
    return posts.slice(0,maxLength).map((post, index) => {
      return (
        <Link href={post.slug}>
          <div className="card custom-posts">
            <img className="card-img-top" style={{ maxHeight: "300px" }} src={post.image} />
            <div className="card-body" style={{ paddingBottom: "0px" }}>
              <h5 className="card-title" style={{ marginTop: "15px" }}>
                <a className="blog-title-link custom-posts-title"><b>{post.title}</b></a>
              </h5>
              <p className="custom-posts-text">
                <ReactMarkdown source={post.details} />
              </p>
              <p style={{ color: "gray", textAlign: "right", marginTop: "30px", fontWeight: "bold" }}>Read More...</p>
            </div>
            <div class="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
              <div class="views"><i class="fa fa-calendar"></i>&nbsp;&nbsp;{post.date}
              </div>
              <div class="stats">
                <i class="fa fa-heart" style={{ color: "#a30000" }}>&nbsp;{post.like}&nbsp;&nbsp;</i>
                <i class="fa fa-comment" style={{ color: "#606060" }}></i>&nbsp;{calculateCommentCount(post.slug)}
              </div>
            </div>
          </div>
        </Link>
      )
    })
  }
  return (
    <div style={{marginBottom:"20px"}}>
      <div className="card-columns">
        {renderPosts()}
      </div>
      {renderFooter()}
    </div>
  )
}

export default Posts;