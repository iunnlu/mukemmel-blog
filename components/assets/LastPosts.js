import React from 'react';
import { Card, Col, Row, Image, ListGroup } from 'react-bootstrap';
import ReactMarkdown from "react-markdown";
import Link from "next/link";

const LastPosts = ({ posts }) => {
  const maxLength = 5;
  const bubbleSort = (arr) => {
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
      for (var j = 1; j <= i; j++) {
        if (arr[j - 1].like > arr[j].like) {
          var temp = arr[j - 1];
          arr[j - 1] = arr[j];
          arr[j] = temp;
        }
      }
    }
    return arr.reverse();
  }
  const renderPopularPosts = () => {
    const sortArray = [...posts]
    return bubbleSort(sortArray).map((item, index) => {
      if (index >= maxLength) {
        return <React.Fragment></React.Fragment>;
      }
      return (
        <Link href={item.slug}>
          <Card style={{ backgroundColor: "#65919f", borderRadius: "7px", marginBottom: "3px" }} text="white">
            <Card.Body>
              <ListGroup variant="flush" style={{ cursor: "pointer" }}>
                <ListGroup.Item style={{ backgroundColor: "#65919f", borderColor: "white", padding: "0px" }}>
                  <Row>
                    <Col className="col-3" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                      <Image style={{ width: "70px", height: "65px" }} src={item.image} roundedCircle />
                    </Col>
                    <Col className="col-9" style={{ padding: "0px" }}>
                      <Row>
                        <Col>
                          <h5>{item.title}</h5>
                          <p style={{ fontSize: "13px", margin: "0px", paddingRight: "15px", paddingLeft: "5px", textAlign: "justify", maxHeight: "95px", overflow: "hidden" }}><ReactMarkdown source={item.details} /></p>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{textAlign:"right", marginRight:"5px", marginTop:"5px"}}>
                          <i class="fa fa-heart" style={{ color: "white" }}>&nbsp;{item.like}&nbsp;&nbsp;</i>  
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Link>
      )
    })
  }
  return (
    <React.Fragment>
      <Card style={{ backgroundColor: "#65919f", borderRadius: "7px", marginBottom: "3px" }} text="white">
        <Card.Header style={{ fontSize: "30px", backgroundColor: "#568492" }}>Popular Posts</Card.Header>
      </Card>
      {renderPopularPosts()}
    </React.Fragment>
  )
}

export default LastPosts;