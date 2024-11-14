import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import Home from "../pages/homepage/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from "../pages/login/Login";
import Nav from "../components/navigation/Nav";
import Register from "../pages/login/Register";
import AboutMe from "../pages/aboutme/AboutMe";


function RouterPages() {
    return (
        <Router>
            {/*<Home/>*/}
            {/*<Nav count={0}/>*/}
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/Aboutme" element={<AboutMe/>}/>
            </Routes>
        </Router>
    );
}

export default RouterPages;
