import CartClicked from "../../utils/CartClicked";
import React from "react";
import "./Nav.scss"
import {Link, NavLink} from "react-router-dom";

function Nav({count}) {
    return (
        <div className={"navigation"}>
            <Link to="/" className="shopName">Magic Shop</Link>
            <Link to="/" className={"shop"}>Shop</Link>
            <Link to="/Aboutme" className={"aboutMe"}>About Me</Link>
            <Link to="/Login" className={"login-button"}>Login</Link>
            <CartClicked count={count}/>
        </div>
    );
}

export default Nav;