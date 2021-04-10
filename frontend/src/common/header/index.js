import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actionCreators } from './store';
import { actionCreators as loginActionCreators } from '../../pages/signup/store'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    Addition,
    Button,
    Ava
} from './style';
import { Form, Card, Alert,Row,Col,Image } from "react-bootstrap"
import { auth } from '../../firebase';


class Header extends Component {

    render() {
        
        const { login, logout } = this.props;
        return (<HeaderWrapper>
             <Link to='/'><Logo /></Link>
            <Nav>
                <NavItem className='left menu'>OUR MENU</NavItem>
                <NavItem className='left'>PLANS</NavItem>
                <NavItem className='left'>OUR VISION</NavItem>
            </Nav >
            <Row>
    <Col xs={6} md={4}>
      <Image  roundedCircle />
    </Col>
  </Row>
            <Addition>
                {
                    login ?
                    <span>
                     <Link to='/detail'><Ava className="signed"></Ava></Link>
                    <Button className="signed">welcome back! </Button>
                    </span> 
                    :
                    <Link to='/signup'><Button className="sign" >SIGN UP </Button></Link>
                }
               
                {
                    login ? 
                    <Link to='/'><Button className="log" onClick={logout}>LOG OUT</Button></Link> : 
                    <Link to='/login'><Button className="log" >LOG IN</Button></Link>
                }

            </Addition>



        </HeaderWrapper>)
    }
}



const mapStateToProps = (state) => {
    return {
        login: state.getIn(['login', 'login']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        logout(){
            dispatch(loginActionCreators.logout())
        }

    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);