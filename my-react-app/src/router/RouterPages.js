import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Home from "../pages/homepage/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../pages/login/Login";
import Register from "../pages/login/Register";
import AboutMe from "../pages/aboutme/AboutMe";
import Cart from "../pages/Cart/Cart";


function RouterPages() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/Aboutme" element={<AboutMe/>}/>
                <Route path="/Cart" element={<Cart/>}/>
            </Routes>
        </Router>
    );
}

export default RouterPages;
