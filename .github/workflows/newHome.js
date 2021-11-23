import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';
import Header from './common/header/index.js';
import Login from './pages/login/login.js';
import SignUp from "./pages/signup/Signup.js";
import Footer from './common/footer/index.js';
import MealPlan from './pages/mealplan/index.js';
import Recommendations from './pages/recommendations/index.js';
import Dashboard from './pages/dashboard/index.js';
import GetUserProfile from './pages/getUserProfile/index.js';
import { useSelector } from "react-redux";
import './style.css';
import logo from "../../statics/savorLogo.png";
import SidebarItem from "./sidebarItem";
//import GroceryList from "./GroceryList";

function SideBar(props) {

    // register login status of users, only display sidebar when logged in
    const loginStatus = useSelector(state => state.getIn(['login','login']));


    return (
        
        <div className={`sidebar ${loginStatus ? "" : "inactive"}`}>
            
            <img src={logo} className="logo-section" alt="logo"></img>
            
            <div className="menu-section">
                <div className="sidebar-sec-label">Menu</div>
                <SidebarItem name="Cooking" iconClassName="fa fa-cookie-bite"></SidebarItem>
                <SidebarItem name="Meal Plan" iconClassName="far fa-newspaper" to="/mealplan"></SidebarItem>
                <SidebarItem name="Groceries" iconClassName="fas fa-shopping-cart"></SidebarItem>
            </div>
            <div className="about-section">
                <div className="sidebar-sec-label">About us</div>
                <SidebarItem name="Our recipes" iconClassName="fas fa-utensils"></SidebarItem>
                <SidebarItem name="Plans" iconClassName="fas fa-map"></SidebarItem>
                <SidebarItem name="Our vision" iconClassName="far fa-lightbulb"></SidebarItem>
            </div>
            <div className="general-section">
                <div className="sidebar-sec-label">General</div>
                <SidebarItem name="Settings" iconClassName="fas fa-cog"></SidebarItem>
                <SidebarItem name="Log out" iconClassName="fas fa-sign-out-alt"></SidebarItem>
            </div>
        </div>
    )
}
export default SideBar;


function SideBar(props) {

    // register login status of users, only display sidebar when logged in
    /*const loginStatus = useSelector(state => state.getIn(['login','login']));


    return (
        
        <div className={`sidebar ${loginStatus ? "" : "inactive"}`}>
            
            <img src={logo} className="logo-section" alt="logo"></img>
            
            <div className="breakfast">
            </div>
            <div className="lunch">
               
            </div>
            <div className="dinner">
            </div>
        </div>
    )
}
export default GroceryList;*/

function newHome(props) {
    render() {
        return (
            <HomeWrapper>
                <TextWrapper>
                    <BodyText>The meal kit everyone</BodyText>
                    <BodyText>relies on</BodyText>
                    <Button>Learn More</Button>
                </TextWrapper>
            </HomeWrapper>
        )
    }
}

export default newHome;
