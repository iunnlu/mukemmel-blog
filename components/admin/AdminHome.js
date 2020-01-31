import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import WritePost from './WritePost';
import PostList from './PostList';
import WithAuth from './WithAuth';
import LogOut from './LogOut';
import '../../styles/adminHomeStyle.scss';
import CreateUser from './CreateUser';

class AdminHome extends React.Component {
    state = { showModal: false };
    hideModalHandler = () => {
        this.setState({ showModal: false })
    }   
    showModalHandler = () => {
        this.setState({ showModal: true})
    }
    render() {
        return (
            <Card className="admin-home">
                <Card.Header>
                    <div style={{display:"flex", justifyContent:"space-between"}}>
                        <h4><b>Admin Menu</b></h4>
                        <span>
                            <CreateUser />
                            <LogOut />
                        </span>
                    </div>
                </Card.Header>
                <Card.Body>
                <Row>
                    <Col style={{textAlign:"right"}}>
                        <Button variant="info" onClick={this.showModalHandler}>New Post</Button>
                    </Col>
                </Row>
                <WritePost 
                    showModal={this.state.showModal} 
                    hideModalHandler={this.hideModalHandler} 
                    showModalHandler = {this.showModalHandler}
                />
                </Card.Body>
                <h4 style={{textAlign:"center", color:"gray"}}>Posts</h4>
                <PostList posts={this.props.posts}/>
            </Card>
        )
    }
}
export default WithAuth(AdminHome);