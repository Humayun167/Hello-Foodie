import "./Navbar.css";
import { assets } from "./../../assets/Images/assets";
import { useContext, useState } from "react";
import { Link, Navigate,  } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("menu");

  const { getTotalCartAmount,token,setToken } = useContext(StoreContext);
  // const {getTotalCartAmount} = useContext(StoreContext)

  const logout = ()=>{
    localStorage.removeItem("token");
    setToken("");
    Navigate("/")
  }

  return (
    <div>
      <div className="navbar">
        <Link to="/">
          <img src={assets.logo} alt="" className="logo" />
        </Link>
        <ul className="navbar-menu">
          <Link to="/">
          <li onClick={() => setMenu("home")}  className={menu === "home" ? "active" : ""}> Home</li> </Link>
          <li href="#menu"   onClick={() => setMenu("menu")}className={menu === "menu" ? "active" : ""}> Menu</li>
          <li onClick={() => setMenu("mobile-app")}className={menu === "mobile-app" ? "active" : ""}> Mobile App </li>
          <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""} >Contact us </li>
        </ul>
        <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          {!token?<button onClick={() => setShowLogin(true)}>Sign In</button>:
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
            <li><img src={assets.bag_icon} alt="" /><p>Orders</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
            </ul>
            </div>}
          
        </div>
      </div>
    </div>
  );
};

export default Navbar;
