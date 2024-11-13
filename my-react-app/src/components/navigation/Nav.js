import HandleLogin from "../loginaction/HandleLogin";
import CartClicked from "../cartaction/CartClicked";
import React from "react";
import "./Nav.scss"

function Nav({count}) {
    return (
        <div className={"navigation"}>
            <button className={"shopName"}>
                Magic Shop
            </button>
            <button className={"shop"}>Shop</button>
            <button>
                <span className={"aboutMe"}>About Me</span>
            </button>
            <HandleLogin/>
            <CartClicked count={count}/>
        </div>
    );
}

export default Nav;