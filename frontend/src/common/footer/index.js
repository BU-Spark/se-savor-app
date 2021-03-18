import React, { Component } from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import './index.css';
import appStorePic from '../../statics/appStore.png';

class Footer extends Component {
    render() {
        return (
            <MDBFooter color="black" className="font-small pt-4 hh">
                <MDBContainer fluid className="text-center text-md-left">
                    <MDBRow>
                        <MDBCol md="3">
                            <ul>
                                <li className = "gap">
                                    <a href="#!">Our Menu</a>
                                </li>
                                <li className = "gap">
                                    <a href="#!">Plans</a>
                                </li>
                                <li className = "gap">
                                    <a href="#!">Our Vision</a>
                                </li>
                                <li className = "gap">
                                    <a href="#!">Do Not "Sell" My Information</a>
                                </li>
                                <li className = "gap">
                                    <a href="#!">Privacy</a>
                                </li>
                                <li className = "gap">
                                    <a href="#!">Term</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="5">
                            <ul>
                               <li className = "gap">
                                    <a href="#!">Blog</a>
                                </li>
                                <li className = "gap">
                                    <a href="#!">Recipes</a>
                                </li>
                                <li className = "gap">
                                    <a href="#!">Affiliates</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="2">
                            <ul>
                               <li className = "gap">
                                    <a href="#!">Customer Support:</a>
                                </li>
                                <li className = "gap">
                                    <a href="#!">Help Center & FAQ</a>
                                </li>
                                <li className = "gap">
                                    <a href="#!">contact@savor.com</a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol md="0">
                            <img src = {appStorePic} alt ="apps" href="#!"/>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className="footer-copyright text-center py-3">
                    <MDBContainer fluid>
                        &copy; {new Date().getFullYear()} Copyright: <a href="/"> SAVOR USA, All rights reserved. Term of use| Privacy Policy </a>
                    </MDBContainer>
                </div>
            </MDBFooter>
        );
    }
}

export default Footer;