import { useSelector } from "react-redux";
import './style.css';
import logo from "../../statics/savorLogo.png";
import SidebarItem from "./sidebarItem";


function SideBar(props) {

    // register login status of users, only display sidebar when logged in
    const loginStatus = useSelector(state => state.getIn(['login','login']));
    function notImplemented() {
        alert("not yet implemented");
    }


    return (
        
        <div className={`sidebar ${loginStatus ? "" : "inactive"}`}>
            
            <img src={logo} className="logo-section" alt="logo"></img>
            
            <div className="menu-section">
                <div className="sidebar-sec-label">Menu</div>
                <SidebarItem to="cooking" name="Cooking" iconClassName="fa fa-cookie-bite" implemented={true}></SidebarItem>
                <SidebarItem to="mealplan" name="Meal Plan" iconClassName="far fa-newspaper" implemented={true}></SidebarItem>
                <SidebarItem to="#" name="Groceries" iconClassName="fas fa-shopping-cart" implemented={false}></SidebarItem>
            </div>
            <div className="about-section">
                <div className="sidebar-sec-label">About us</div>
                <SidebarItem to="#" name="Our recipes" iconClassName="fas fa-utensils" implemented={false}></SidebarItem>
                <SidebarItem to="#" name="Plans" iconClassName="fas fa-map" implemented={false}></SidebarItem>
                <SidebarItem to="#" name="Our vision" iconClassName="far fa-lightbulb" implemented={false}></SidebarItem>
            </div>
            <div className="general-section">
                <div className="sidebar-sec-label">General</div>
                <SidebarItem to="#" name="Settings" iconClassName="fas fa-cog" implemented={false}></SidebarItem>
                <SidebarItem to="#" name="Log out" iconClassName="fas fa-sign-out-alt" implemented={false}></SidebarItem>
            </div>
        </div>
    )
}
export default SideBar;