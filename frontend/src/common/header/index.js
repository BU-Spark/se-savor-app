import React, { Component } from 'react';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Addition,
    Button
} from './style';
class Header extends Component {
    render() {
        return (<HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left menu'>OUR MENU</NavItem>
                <NavItem className='left'>PLANS</NavItem>
                <NavItem className='left'>OUR VISION</NavItem>
            </Nav >
            <Addition>
                <Button className = "sign">SIGN UP </Button>
                <Button className = "log">LOG IN</Button>
                
            </Addition>
        </HeaderWrapper>)
    }
}

export default Header;