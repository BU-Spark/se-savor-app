import { useDispatch, useSelector } from "react-redux";
import React, { Component } from 'react';
import './style.css';
import logo from "../../statics/savorLogo.png";
import SidebarItem from "./sidebarItem";

{/* <link href="http://fonts.cdnfonts.com/css/avenir-lt-std" rel="stylesheet"></link> */}


function SideBar(props) {

    const loginStatus = useSelector(state => state.getIn(['login','login']));


    return (
        
        <div className={`sidebar ${loginStatus ? "" : "inactive"}`}>
            
            <img src={logo} className="logo-section"></img>
            
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