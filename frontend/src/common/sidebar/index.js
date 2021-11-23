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
                <SidebarItem to="#" name="Cooking" iconClassName="fa fa-cookie-bite"></SidebarItem>
                <SidebarItem to="mealplan" name="Meal Plan" iconClassName="far fa-newspaper"></SidebarItem>
                <SidebarItem to="#" name="Groceries" iconClassName="fas fa-shopping-cart"></SidebarItem>
            </div>
            <div className="about-section">
                <div className="sidebar-sec-label">About us</div>
                <SidebarItem to="#" name="Our recipes" iconClassName="fas fa-utensils"></SidebarItem>
                <SidebarItem to="#" name="Plans" iconClassName="fas fa-map"></SidebarItem>
                <SidebarItem to="#" name="Our vision" iconClassName="far fa-lightbulb"></SidebarItem>
            </div>
            <div className="general-section">
                <div className="sidebar-sec-label">General</div>
                <SidebarItem to="#" name="Settings" iconClassName="fas fa-cog"></SidebarItem>
                <SidebarItem to="#" name="Log out" iconClassName="fas fa-sign-out-alt"></SidebarItem>
            </div>
        </div>
    )
}
export default SideBar;