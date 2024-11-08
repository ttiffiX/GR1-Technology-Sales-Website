import React, {useState} from 'react';
// import '../../styles/App.css';
import '../styles/App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./homepage/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./login/Login";

function App() {
    return (
       <BrowserRouter>
           {/*<Home/>*/}
           <Switch>
               <Route path="/" exact>
                   <Home/>
               </Route>
               <Route path="/tt">
                   <Login/>
               </Route>
           </Switch>
       </BrowserRouter>
    );
}

export default App;
