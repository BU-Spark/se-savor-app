import React, { useRef, useState,Component } from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { connect } from 'react-redux';
import { actionCreators} from './store';
import { LoginWrapper, LoginBox} from './style';
import { signInWithGoogle, uiConfig} from "../../firebase";


    function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
  
    async function handleSubmit(e) {
      e.preventDefault()
  
      try {
        setError("")
        setLoading(true)
        await login(emailRef.current.value, passwordRef.current.value)
        history.push("/")
      } catch {
        setError("Failed to log in")
      }
  
      setLoading(false)
    }

    async function handleGoogleSignIn(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await signInWithGoogle()
          history.push("/")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
      }

    


  
    return (
      <>
       <LoginWrapper>
       <LoginBox>
    
          <Card.Body>
            <h2 className="text-center mb-4">Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Button variant="flat" disabled={loading} className="w-100" type="submit" style={{ backgroundColor :"#EE7B22", color:'white'}}>
                Log In
              </Button>
              
              <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">Forgot Password?</Link>
            </div>
          </Card.Body>
        <div className="w-100 text-center mt-2">
          Need an account? <Link to="/signup">Sign Up</Link>
        </div>

        </LoginBox>
        </LoginWrapper>
      </>
    )
  }

const mapState = (state) =>({

})

const mapDispatch = (dispatch) => ({
})

export default connect(mapState,mapDispatch)(Login);