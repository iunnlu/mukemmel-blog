import React from 'react';
import '../../styles/navbarStyle.scss'
import '../../styles/lines.css';

const Navbar = () => {
    return(
        <nav>
            <div className="nav-row">
                <div className="col" style={{padding:"0px"}}>
                    <section className="p15">
                        <div className="lines">
                            <div class="line"></div>
                            <div class="line"></div>
                        </div>
                        <a className="custom-title" href="https://ilhanunlu.herokuapp.com/">İlhan Ünlü
                            <div className="t1">
                                <div className="in"></div>
                            </div>
                            <div className="t2">
                                <div className="in"></div>
                            </div>
                        </a>
	                </section>
                    <div className="p15-text">
                        <p>Software Developer</p>
                    </div>
                    <div className="p15">
                        <ul className="social-network social-circle">
                            <li><a href="https://www.facebook.com/ilhan.unlu" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/i.unnlu" className="icoGoogle" title="İnstagram"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="https://www.linkedin.com/in/ilhan-unlu" className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Navbar;