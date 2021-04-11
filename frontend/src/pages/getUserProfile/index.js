import React, { useRef, useState, Component } from "react"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import { Form, Button, Card, Alert, Col,InputGroup } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext.js"
import { Link, useHistory } from "react-router-dom"
import { LoginWrapper, LoginBox } from './style';
import { signInWithGoogle, uiConfig, firestore } from "../../firebase";



function GetUserProfile() {
  const firstnameRef = useRef()
  const lastnameRef = useRef()
  const birthdateRef = useRef()
  const phonenumRef = useRef()
  const BudgetRef = useRef()
  const sizeRef = useRef()
  const dietaryRef = useRef()
  const { userProfileRequest } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()



  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await userProfileRequest(firstnameRef.current.value,
        lastnameRef.current.value,
        birthdateRef.current.value,
        phonenumRef.current.value,
        BudgetRef.current.value,
        sizeRef.current.value,
        dietaryRef.current.value);
      history.push('./')
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
            <h2 className="text-center mb-5" style={{ color: "#EE7B22", fontSize: '30px' }}>please start your profile</h2>

            <Form onSubmit={handleSubmit}>
              <Form.Row>
                <Form.Group as={Col}>
                  <Form.Label>first name</Form.Label>
                  <Form.Control ref={firstnameRef} required />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>last name</Form.Label>
                  <Form.Control ref={lastnameRef} required />
                </Form.Group>
              </Form.Row>
              <Form.Group >
                <Form.Label>date of birth</Form.Label>
                <Form.Control type="date" ref={birthdateRef} required />
              </Form.Group>
              <Form.Group >
                <Form.Label>phone number</Form.Label>
                <Form.Control ref={phonenumRef} required />
              </Form.Group>
              <Form.Group >
                <Form.Label>Budget</Form.Label>
                <InputGroup.Prepend>
                <InputGroup.Text>$</InputGroup.Text>
                <Form.Control type="number" min="0" step="any" placeholder='0.00' ref={BudgetRef} required />
                </InputGroup.Prepend>
              </Form.Group>
              <Form.Group >
                <Form.Label>Group Size</Form.Label>
                <Form.Control type="number" min="1"  ref={sizeRef} required />
              </Form.Group>

              <Form.Group >
                <Form.Label>Dietary Restrictions</Form.Label>
                <Form.Control as="select" defaultValue="Choose..." ref={dietaryRef}>
                  <option>None</option>
                  <option>Vegatarian</option>
                </Form.Control  >
              </Form.Group>
              <Button variant="flat" disabled={loading} className="w-100" type="submit" style={{ backgroundColor: "#EE7B22", color: 'white' }}>
                Submit
              </Button>

            </Form>

          </Card.Body>

        </LoginBox>
      </LoginWrapper>
    </>
  )
}



export default GetUserProfile;
