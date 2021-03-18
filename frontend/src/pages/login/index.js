import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button, Text, Nav, NavItem, NavCheckbox } from './style';
import { actionCreators} from './store';
class Login extends PureComponent {
    render() {
        const { loginStatus } = this.props;
        //console.log(loginStatus);
        if(!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Text>Log In</Text>
                        <Input placeholder='Email' ref={(input) => {this.account = input}} />
                        <Input placeholder='password' type='password' ref={(input) => {this.password = input}} />
                        <Nav>
                            <NavCheckbox className='left'></NavCheckbox>
                            <NavItem className='left'>Remember Me?</NavItem>
                            
                            <NavItem className='right'>Forgot Passoword?</NavItem>
                        </Nav>
                        <Button onClick={() => this.props.login(this.account,this.password)}>Log In</Button>
                        <Nav>
                            <NavItem className='or'>-----------------------or-----------------------</NavItem>
                        </Nav>
                    </LoginBox>
                </LoginWrapper>
            )
        }else{
            return <Redirect to='/'/>
        }
        
    }
}

const mapState = (state) =>({
    loginStatus: state.getIn(['login','login']),
})

const mapDispatch = (dispatch) => ({
    login(accountElem,passwordElem){
        dispatch(actionCreators.login(accountElem.value,passwordElem.value));
    }
})

export default connect(mapState,mapDispatch)(Login);