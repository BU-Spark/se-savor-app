import axios from 'axios';
import * as constants from './constants';
import { useAuth } from "../../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import React, { useRef, useState,Component } from "react"
import { auth,firestore } from "../../../firebase"
import 'firebase/firestore';
import firebase from 'firebase/app';

export const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
});

export const getData =(name) =>({
    type: constants.GETDATA,
    username: name,
})

export const changeLogout = () => ({
    type: constants.LOGOUT,
    value: false
})
export const login = (account,password) => {
    return (dispatch) =>{
        axios.get('/api/login.json?account=' + account + '&password' + password).then((res) =>{
            const result = res.data.data;
            console.log(result);
            if (result){
                dispatch(changeLogin())
            }else{
                alert('wrong')
            }
            console.log(res);
        })
    }
}


export const logout = () => {
    return (dispatch) => {
        auth.signOut();
        dispatch(changeLogout);
    }
}

