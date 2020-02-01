import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../../styles/footerStyle.scss';
import footerPic from '../../src/footer-pic.png';
import Media from 'react-media';

class Footer extends React.Component {
    render() {
        return (
            <div className="custom-footer" style={{ height: "100px" }}>
                <Container>
                    <Media queries={{ small: "(max-width: 599px)" }}>
                        {matches =>
                            matches.small ? (
                                <React.Fragment>
                                <Row>
                                    <Col className="col-12" style={{ marginTop:"10px", marginBottom:"15px",color: "white", display:"flex", justifyContent:"center" }}>
                                        <p className="footer-text" style={{ margin: "0px", fontWeight: "bold" }}>Copyright © 2020 | Powered by İlhan Ünlü</p>
                                    </Col>
                                    <Col className="col-12" style={{ display:"flex", justifyContent:"center" }}>
                                            <ul className="social-network social-circle" style={{ margin: "0px" }}>
                                                <li><a href="https://www.facebook.com/ilhan.unlu" className="icoFacebook" id="footer-icon" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="https://www.instagram.com/i.unnlu" className="icoGoogle" id="footer-icon" title="İnstagram"><i className="fa fa-instagram"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/ilhan-unlu" className="icoLinkedin" id="footer-icon" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                    </Col>
                                </Row>
                                </React.Fragment>
                            ) : (
                                    <Row>
                                        <Col style={{ color: "white", height: "100px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <p className="footer-text" style={{ margin: "0px", fontWeight: "bold" }}>Copyright © 2020 | Powered by İlhan Ünlü</p>
                                            <ul className="social-network social-circle" style={{ margin: "0px" }}>
                                                <li><a href="https://www.facebook.com/ilhan.unlu" className="icoFacebook" id="footer-icon" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                                                <li><a href="https://www.instagram.com/i.unnlu" className="icoGoogle" id="footer-icon" title="İnstagram"><i className="fa fa-instagram"></i></a></li>
                                                <li><a href="https://www.linkedin.com/in/ilhan-unlu" className="icoLinkedin" id="footer-icon" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                                            </ul>
                                        </Col>
                                    </Row>
                                )
                        }
                    </Media>
                </Container>
            </div>
        )
    }
}

export default Footer;