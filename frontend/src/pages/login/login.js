import React, { useRef, useState } from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { actionCreators} from './store';
import { LoginWrapper, LoginBox} from './style';
import { uiConfig } from "../../firebase";
import { useDispatch } from "react-redux";
import Footer from '../../common/footer/index.js';



function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const dispatch = useDispatch();

 

    async function handleSubmit(e) {
      e.preventDefault()
      try {
        setError("")
        setLoading(true)
        login(emailRef.current.value, passwordRef.current.value).then((userCredential) => {
          var user = userCredential.user;
          if (!user.emailVerified){
            setError("Please verify!!!!!!!!!!!!!!!!")
          }
          if (user.emailVerified){
            dispatch(actionCreators.changeLogin());
            history.push("/dashboard")
          }
        }).catch((error) => {
          setError(error.message);
        });
      } catch {
         setError('something went wrong');
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
        <footer>
          <Footer />
        </footer>
      </>
    )
  }

export default Login;