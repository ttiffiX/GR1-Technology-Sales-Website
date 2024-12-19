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
        <Router future={{
            v7_relativeSplatPath: true, // Bật thay đổi liên quan đến splat path
            v7_startTransition: true,  // Bật sử dụng React.startTransition
        }}>
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
