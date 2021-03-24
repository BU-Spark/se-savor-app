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
    Button
} from './style';


class Header extends Component {

    render() {
        
        const { login, logout } = this.props;
        return (<HeaderWrapper>
            <Logo />
            <Nav>
                <NavItem className='left menu'>OUR MENU</NavItem>
                <NavItem className='left'>PLANS</NavItem>
                <NavItem className='left'>OUR VISION</NavItem>
            </Nav >
            <Addition>
                {
                    login ? <Button className="signed">welcome back </Button> :
                    <Link to='/signup'><Button className="sign" >SIGN UP </Button></Link>
                }
               
                {
                    login ? 
                    <Button className="log" onClick={logout}>LOG OUT</Button> : 
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