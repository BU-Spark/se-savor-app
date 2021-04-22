import React, { useContext, useState, useEffect } from "react"
import { auth } from "../firebase"
import 'firebase/firestore';
import firebase from 'firebase/app';
const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
      let auth =firebase.auth();
       return auth.createUserWithEmailAndPassword(email, password).catch(function(error){
         console.log(error);
       }).then(userCredential => {
        let user = userCredential.user;
        let userID = user.uid;
        let db = firebase.firestore();
         db.collection('Users').doc(userID).set({
           email: email,
         })
       })
  }

  function userProfileRequest(firstname,lastname,birth,phone,budget,size,dietary){
    const user = auth.currentUser;

    let db = firebase.firestore();
    let userID = user.uid;
    db.collection('Users').doc(userID).update({
      firstname:firstname,
      lastname:lastname,
      birth:birth,
      phone:phone,
      budget:budget,
      size:size,
      dietary:dietary
    })
    return 
  }

  function verificationEmail(){
    const user = auth.currentUser;
    return user.sendEmailVerification()
  }

  function login(email, password) {
   
    return auth.signInWithEmailAndPassword(email, password);
  }


  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    verificationEmail,
    userProfileRequest,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}