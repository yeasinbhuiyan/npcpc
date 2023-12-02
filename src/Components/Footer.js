import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faPhoneVolume} from "@fortawesome/free-solid-svg-icons";


function Footer(props) {
    return (

        <Container fluid="true" className="footer">
            <Row className="m-0 pt-3">
                <Col className="contact" md={6} sm={12} lg={6}>
                    <h4>Important Links</h4>
                    <a href="">Notice</a><br/>
                    <a href="">Registration</a><br/>
                    <a href="">JU CSE</a><br/>

                </Col>
                <Col className="contact" md={6} sm={12} lg={6}>
                    <h4>Contact Us</h4>
                    <a href="https://www.juniv.edu/department/cse" target="_self">Department of Computer Science & Engineering<br/>
                    Jahangirnagar University, Savar, Dhaka-1342</a><br/>
                    <span><FontAwesomeIcon icon={faPhoneVolume}/> 01824340471</span>
                    <span className="mx-3"><FontAwesomeIcon icon={faEnvelope}/> jucse_ncpc2023@gmail.com</span>
                    <div className="iconDiv">
                        <a className="contactLink mx-1" href="https://www.facebook.com/groups/1406720813273322"><FontAwesomeIcon icon={faFacebook}/> </a>
                        <a className="contactLink mx-1" href="#a"><FontAwesomeIcon icon={faTwitter}/> </a>
                        <a className="contactLink mx-1" href="#a"><FontAwesomeIcon icon={faInstagram}/> </a>
                        <a className="contactLink mx-1" href="#a"><FontAwesomeIcon icon={faLinkedin}/> </a>
                    </div>
                </Col>
            </Row>
            <Row className="m-0 p-0">
                <Col className="footerCredit text-center">
                    &copy; 2023 <a href="https://www.juniv.edu/department/cse" _target="blank">Department of Computer Science and Engineering, Jahangirnagar University</a>
                </Col>
            </Row>
        </Container>



    );
}

export default Footer;