import React, { useRef, useState,Component } from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { actionCreators} from './store';
import { LoginWrapper, LoginBox} from './style';
import { signInWithGoogle, uiConfig,firestore} from "../../firebase";
import { useDispatch, useSelector } from "react-redux";



    function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const loginStatus = useSelector(state => state.getIn(['login','login']));
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
            //dispatch(actionCreators.getData());
            history.push("/")
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
      </>
    )
  }

// const mapState = (state) =>({
//   loginStatus: state.getIn(['login','login']),
// })

// const mapDispatch = (dispatch) => ({
//   logined(){
//     dispatch(actionCreators.logined());
// }
// })

export default Login;
//export default connect(mapState,mapDispatch)(Login);