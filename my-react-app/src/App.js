import React from 'react';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./pages/homepage/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "./pages/login/Login";
import {ToastContainer} from "react-toastify";
import {ToastProvider} from "./components/Toast/Toast";

function App() {
    return (
        <ToastProvider>
            <ToastContainer
                position="top-left"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
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
        </ToastProvider>
    );
}

export default App;
