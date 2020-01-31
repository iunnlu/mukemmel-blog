import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import '../../styles/footerStyle.scss';
import footerPic from '../../src/footer-pic.png';

class Footer extends React.Component{
    render(){
        return(
            <div className="custom-footer" style={{height:"100px"}}>
                <Container>
                    <Row>
                        <Col style={{color:"white", height:"100px", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                            <p style={{margin: "0px", fontWeight:"bold"}}>Copyright © 2020 | Powered by İlhan Ünlü</p>
                            <ul className="social-network social-circle" style={{margin:"0px"}}>
                                <li><a href="https://www.facebook.com/ilhan.unlu" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://www.instagram.com/i.unnlu" className="icoGoogle" title="İnstagram"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/ilhan-unlu" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;