import React from "react";
import '../../styles/App.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
function HandleLogin(){

    return(
        <div>
            <button className={"login-button"} >
                <a href="\tt">Login</a>
            </button>
        </div>
    )
}
export default HandleLogin
