import HandleLogin from "./HandleLogin";
import CartClicked from "./CartClicked";
import React from "react";

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